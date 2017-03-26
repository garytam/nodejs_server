// exports.requireAuthentication = function(req, res, next){
//     console.log(new Date().toString(), "private route hit!!! ");
//     next();
// }
//
// exports.logger = function(req, res, next){
//     console.log(new Date().toString(), "request=>" + req.method + " " + req.originalUrl);
//     // console.log(req);
//     next();
// }


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

module.exports = middleware;
