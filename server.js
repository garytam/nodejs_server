var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
  requireAuthentication: function(req, res, next){
    console.log(new Date().toString(), "private route hit! ");
    next();
  },
  logger: function(req, res, next){
    console.log(new Date().toString(), "request=>" + req.method + " " + req.originalUrl);
    // console.log(req);
    next();
  }
};

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.get("/home", middleware.requireAuthentication, function(req, res){
  res.send("Go Home");
})

app.get('/about', function(req, res){
  res.send('Something about this');
})

app.listen(PORT, function(){
  console.log("Express server listen on port " + PORT);
});
