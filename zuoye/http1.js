var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var url = req.url;
    console.log(url)
    switch (url) {
        case "/index1.html":
            fs.readFile("index1.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/index2.html":
            fs.readFile("index2.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        case "/index3.html":
            fs.readFile("index3.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        case "/css":
            fs.readFile("index1.css", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/css;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        case "/js":
            fs.readFile("index1.js", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败");
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/javascript;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        case "/a.jpg":
            fs.readFile("a.jpg", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "image/jpeg;charset=utf8"});
                    res.end(data);
                }
            });
            break;
        default:
            res.writeHead(200, {"content-type": "text/html;charset=utf8"});
            res.end("404 找不到！")
        }
    }).listen(3000);
