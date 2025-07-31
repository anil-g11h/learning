import * as http from 'http';

http.createServer((req, res) => {
    // Serve HTML file for root path
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello, World123!</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});