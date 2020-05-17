require('dotenv').config()

const express = require('express');
const app = express();
const request = require('request');
const key = process.env.API_KEY;

console.log(process.env);

app.get("/movies", function(req, res) {
  request("http://omdbapi.com/?s=africa&apikey=key", function(error, response, body) { 
    if(!error && response.statusCode == 200)
      res.send(body);
    });   
});

app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});