const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second


app.use(express.json());


let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

// Middleware function to rate limit requests per user
function rateLimiter(req, res, next) {
  // Extracting user ID from request headers
  const userId = req.header["user-id"];

  // Checking if the user has exceeded the request limit
  if (numberOfRequestsForUser[userId]) {
      // Incrementing the request count for the user
      numberOfRequestsForUser[userId] += 1;
      // Blocking the user if the request limit is exceeded
      if (numberOfRequestsForUser[userId] > 5) {
          // Sending a 404 error response if the limit is exceeded
          res.status(404).send("no entry");
      } else {
          // Allowing the request to proceed if the limit is not exceeded
          next();
      }
  } else {
      // Initializing the request count for a new user
      numberOfRequestsForUser[userId] = 1;
      // Allowing the request to proceed for a new user
      next();
  }
}


app.use(rateLimiter);


app.get('/user', function(req, res) { 
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;

// app.listen(3000);