//jshint esversion:6
//Angelayu
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
// app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
//   console.log(req.headers);
  fs.appendFile("./log.txt", req.url + "\t"+ Date()+ "\n", (err) => {
    if (err) {
      return res.end("error: " + err);
    }
  });
  next();
});

app.get("/", (req, res) => {
//   res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello, World! \n");
  res.end("in appp sednd ");
  // res.write("bye...")
  // res.sendFile(__dirname+"/index.html")
});
app.post("/", (req, res) => {
//   console.log(req.body);
  res.send("in post");
});
app.listen(80, () => {
  console.log("statred");
});
