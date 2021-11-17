"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 4444;
const things = require("./things");

app.use(express.json());
app.use("/things", things);
//use the things.js file to handle
//endpoints that start with /things

app.get("/", (req, res) => {  res.send("hello root");
});

app.get("/Welcome", (req, res) => {  res.send("고객 센터에 오신 것을 환영합니다!");
});

app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});