@echo off
echo === System Emergency Recovery & Startup ===

echo [1/4] Cleaning up...
if exist frontend\node_modules rd /s /q frontend\node_modules
if exist backend\node_modules rd /s /q backend\node_modules
call npm cache clean --force

echo [2/4] Installing dependencies...
echo Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 exit /b %errorlevel%
cd ..

echo Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 exit /b %errorlevel%
cd ..

echo [3/4] Initializing Prisma...
cd backend
call npx prisma generate
if %errorlevel% neq 0 exit /b %errorlevel%
cd ..

echo [4/4] Starting services...
echo Starting Backend and Frontend...
start cmd /k "cd backend && npm run start:dev"
cd frontend
call npm run dev
