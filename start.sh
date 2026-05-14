#!/bin/bash

# Exit on error
set -e

echo "=== System Emergency Recovery & Startup ==="

echo "[1/4] Cleaning up..."
rm -rf frontend/node_modules backend/node_modules
npm cache clean --force

echo "[2/4] Installing dependencies..."
echo "Installing backend dependencies..."
(cd backend && npm install)
echo "Installing frontend dependencies..."
(cd frontend && npm install)

echo "[3/4] Initializing Prisma..."
(cd backend && npx prisma generate)

echo "[4/4] Starting services..."
echo "Starting Backend (NestJS) in background..."
(cd backend && npm run start:dev) &

echo "Starting Frontend (Next.js)..."
(cd frontend && npm run dev)
