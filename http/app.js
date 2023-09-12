const http = require("http");
const fs = require("fs");
var url = require('url');
// const test = require("./test.html")

const hostname = "127.0.0.1";
const port = 80;

const server = http.createServer((req, res) => {
  // console.log(url.parse(req.url, true))
  // console.log(req.headers)
  // if(req.url ="/favicon.ico") return res.end("fav");
  fs.appendFile("./log.txt",req.headers["user-agent"].split(" ")[4] + req.url +"\n",(err)=>{
    
  })
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/test") {
    return res.end("test.html");
  }
  return res.end("Hello, World!\nAYYAPPA \t really THANKYOUUUU");
}).listen(port, hostname, (err, data) => {
  console.log(`Server running at http://${hostname}:${port}/ , ${err}, ${data}`);
});
