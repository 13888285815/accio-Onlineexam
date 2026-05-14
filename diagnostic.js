const fs = require('fs');
const net = require('net');
const path = require('path');
const { execSync } = require('child_process');

async function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        resolve(true);
      }
    });
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    server.listen(port, '0.0.0.0');
  });
}

async function run() {
  console.log('--- Diagnostic Tool ---');
  let hasError = false;

  // 1. Node.js version check
  const nodeVersion = process.versions.node;
  const majorVersion = parseInt(nodeVersion.split('.')[0], 10);
  if (majorVersion < 18) {
    console.error(`[FAIL] Node.js version is ${nodeVersion}. Expected >= 18.`);
    hasError = true;
  } else {
    console.log(`[OK] Node.js version: ${nodeVersion}`);
  }

  // 1.1 Curl existence check
  try {
    execSync('curl --version', { stdio: 'ignore' });
    console.log('[OK] Curl is installed.');
  } catch (e) {
    console.error('[FAIL] Curl is not installed. It is required for health checks.');
    hasError = true;
  }

  // 2. Port check
  const ports = [3001, 3002];
  for (const port of ports) {
    const isAvailable = await checkPort(port);
    if (!isAvailable) {
      console.error(`[FAIL] Port ${port} is already in use.`);
      hasError = true;
    } else {
      console.log(`[OK] Port ${port} is available.`);
    }
  }

  // 3. Database file check
  const dbPath = path.join(__dirname, 'backend', 'prisma', 'dev.db');
  if (!fs.existsSync(dbPath)) {
    console.warn(`[WARN] Prisma database file not found at ${dbPath}.`);
    console.warn('       Run "npx prisma migrate dev" in backend directory to create it.');
  } else {
    console.log(`[OK] Database file found: ${dbPath}`);
  }

  if (hasError) {
    console.error('\nDiagnostic failed. Please fix the issues above before starting.');
    process.exit(1);
  } else {
    console.log('\nDiagnostic passed! System is ready to start.');
  }
}

run().catch(err => {
  console.error('Diagnostic tool error:', err);
  process.exit(1);
});
