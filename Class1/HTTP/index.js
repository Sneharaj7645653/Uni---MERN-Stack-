const http = require('http');

const myServer = http.createServer((req , res)=>{
    res.end('Request received successfully');
});

myServer.listen(1201, () => {
    console.log('Server is running on port 1201');
});