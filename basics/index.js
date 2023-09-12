const os = require("os")
const fs = require("fs")

console.log("1")
fs.readFile("../http-nodeJS/log.txt", "utf8", (e,r)=>{console.log(r)})
console.log("2")

for (let index = 0; index < 1000000; index++);

console.log(os.cpus().length)