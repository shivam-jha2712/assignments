const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

function globalMiddleware(req, res, next) {
  // this keeps in check for all statusCodes == 200
  if (res.statusCode == 200) {
    // If you don't want only for status code of 200 then you can even remove this if check
    requestCount++; // and then if it is 200 it increments the data
  }
  next();
}

app.use(express.json());

app.use(globalMiddleware);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

module.exports = app;
// app.listen(3000);