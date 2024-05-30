const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/' && method === 'GET') {
        const filePath = path.join(__dirname, 'views', 'home.html');
        renderPage(filePath, res);
    } else if (url === '/student' && method === 'GET') {
        const filePath = path.join(__dirname, 'views', 'student.html');
        renderPage(filePath, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

const renderPage = (filePath, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
};

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const home = require('./views/home');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);

    if (pathname === '/') {
        const pageContent = home.renderPage();
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(pageContent);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

