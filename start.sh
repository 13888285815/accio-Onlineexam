#!/bin/bash

# Exit on error
set -e

# Function for error cleanup
cleanup() {
  echo "Error occurred. Stopping all background processes..."
  jobs -p | xargs kill 2>/dev/null || true
}
trap cleanup ERR

echo "=== System Emergency Recovery & Startup ==="

# Run diagnostic tool
echo "[1/5] Running diagnostics..."
lsof -ti:3001,3002 | xargs kill -9 2>/dev/null || true
node diagnostic.js

echo "[2/5] Checking dependencies..."
if [ ! -d "backend/node_modules" ]; then
  echo "Installing backend dependencies..."
  (cd backend && npm install)
fi

if [ ! -d "frontend/node_modules" ]; then
  echo "Installing frontend dependencies..."
  (cd frontend && npm install)
fi

echo "[3/5] Initializing Database & Prisma..."
(cd backend && npx prisma generate)
(cd backend && npx prisma db push --accept-data-loss)

echo "[4/5] Starting services..."
echo "Starting Backend (NestJS) in background... (Logs: backend.log)"
(cd backend && npm run start:dev > ../backend.log 2>&1) &

# Wait for backend to be healthy before starting frontend
echo "Waiting for backend health check..."
MAX_RETRIES=30
COUNT=0
until $(curl -sSf http://127.0.0.1:3002/api/health > /dev/null 2>&1); do
  printf '.'
  sleep 2
  COUNT=$((COUNT+1))
  if [ $COUNT -ge $MAX_RETRIES ]; then
    echo -e "\n\033[1;31mBackend failed to start in time. Printing backend.log:\033[0m"
    cat backend.log
    exit 1
  fi
done
echo -e "\nBackend is up!"

echo -e "\033[1;32m===============================================\033[0m"
echo -e "\033[1;32m   SUCCESS: Services are ready!                \033[0m"
echo -e "\033[1;32m   Backend:  http://127.0.0.1:3002/api         \033[0m"
echo -e "\033[1;32m   Frontend: http://127.0.0.1:3001             \033[0m"
echo -e "\033[1;32m===============================================\033[0m"

echo "[5/5] Starting Frontend (Next.js)..."
(cd frontend && NEXT_PRIVATE_LOCAL_SKIP_SWC_CHECK=1 npm run dev -- -p 3001)
