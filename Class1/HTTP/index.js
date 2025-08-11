const http = require('http');
const fileHandler = require('fs');
const path = require('path');
const myServer = http.createServer((req, res) => {

    let log = `${Date.now()} : ${req.url} New request received`;
    fileHandler.appendFile('log.txt', log + '\n', (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    switch (req.url) {
        case '/':
            res.end(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Node.js Server Test</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <header>
                    <h1 >Welcome!</h1>
                </header>

                <main>
                    <p>This is a simple HTML page served by Node.js.</p>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                    </nav>
                </main>

                <footer>
                    <p>&copy; 2025 My Node Server</p>
                </footer>
            </body>
            </html>`);
            break;

        case '/styles.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            fileHandler.readFile(path.join(__dirname, 'styles.css'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error loading CSS');
                } else {
                    res.end(data);
                }
            });
            break;
        case '/about':
            res.end('Welcome to the about page');
            break;
        case '/contact':
            res.end('Welcome to the contact page');
            break;
         
        default:
            res.end('404 Not Found');
            break;
    }
});

myServer.listen(1201, () => {

    console.log('Server is running on port 1201');
});

