var http = require('http');

http.createServer(function (req, res) {
    res.write('Hi, Welcome to Zuri Team!');
    res.end();
}).listen(8080);