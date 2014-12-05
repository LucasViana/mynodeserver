var express = require('express');
var app = express();
var path = require('path');

app.get("/", function (req, res) {
  res.redirect("/index.html");
});


app.use(express.static(__dirname + '/public'));
;

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});