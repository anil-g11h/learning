const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'index.html');
  if (req.url !== '/' && req.url !== '/index.html') {
    filePath = path.join(__dirname, req.url);
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      let contentType = 'text/html';
      if (filePath.endsWith('.js')) contentType = 'application/javascript';
      if (filePath.endsWith('.css')) contentType = 'text/css';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
