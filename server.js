var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 发送响应数据 "Hello World"
    //console.log(request.rawHeaders)
    //console.log(request.headers)
    //console.log(request.url)
    response.end('Hello HWF V2\n');

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://192.168.32.5:8888/');
