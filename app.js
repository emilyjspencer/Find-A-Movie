var express = require('express');
var app = express();
var request = require('request');

app.get("/results", function(req, res) {
    res.send("Testing testing 123")

});



app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
  });