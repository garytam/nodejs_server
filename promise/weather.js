var url = 'http://api.openweathermap.org/data/2.5/weather?appid=8ea44d1cb73d2c3a51bc7be4782ea7fa&q=';
var request = require('request');


module.exports = function(_location, callback)
{
  location = encodeURIComponent(_location);

  url = url + location + '&units=metric';
  request({url: url,
           json: true},
           function(error, response, body){
              if (error){
                callback(error, "Fail to fetch weather") ;
              } else {
                callback(null, "it is " + body.main.temp + " c in " + body.name) ;
              }
           });
}
