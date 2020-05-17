require('dotenv').config()

const express = require('express');
const app = express();
const request = require('request');
const key = process.env.API_KEY;
app.set("view engine", "ejs");
console.log(process.env);

app.get("/movies", function(req, res) {
  request("http://omdbapi.com/?s=africa&apikey=key", function(error, response, body) { 
    if(!error && response.statusCode == 200)
    var movies = JSON.parse(body)
      res.render("movies", {data: movies})
    });   
});

app.get("/", function(req, res) {
  res.render("searchmovies");
});

app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});