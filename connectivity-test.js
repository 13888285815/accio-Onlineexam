const http = require('http');

const PORT = 3001;
const HOST = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Connectivity Test OK\n');
});

server.listen(PORT, HOST, () => {
  console.log(`Standalone Connectivity Test Server running at http://${HOST}:${PORT}/`);
  console.log('If you can see this message in your browser, the network/port is OK.');
  console.log('The issue might be related to Next.js or other framework configurations.');
  console.log('Press Ctrl+C to stop.');
});
