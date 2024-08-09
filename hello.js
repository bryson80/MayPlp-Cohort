http = require('node:http');
listener = function (request, response) {
    //send the HTTP header
    //HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
    // Send the response body as "hello World"
    response.end('<h2 style="text-align: center;">Hello World</h2>')
};
server = http.createServer(listener);
server.listen(3000);
// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');