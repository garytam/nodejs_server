// function doWork(data, callback){
//
// }
//
// function doWorkPromise(data){
//   return new Promise(function(resolve, reject){
//
//     setTimeout(function(){
//       reject('going down');
//       // resolve('All Honky Dorly');
//       // reject('All hell breaks loose');
//     }, 3000);
//
//   })
// }
//
//
// doWorkPromise('some data').then(function(data){
//   console.log(data);
// }, function(error){
//   console.log(error)
// });


function getWeather(_location, callback){

  return new Promise(function(resolve, reject){
    var url = 'http://api.openweathermap.org/data/2.5/weather?appid=8ea44d1cb73d2c3a51bc7be4782ea7fa&q=';
    var request = require('request');
    location = encodeURIComponent(_location); 
    if (location === 'undefined' || location.length == 0){
      return reject("Not location!!!!");
    }

    url = url + location + '&units=metric';
    request({url: url,
             json: true},
             function(error, response, body){
                if (error){
                  reject("Fail to fetch weather") ;
                } else {
                  if (location === body.name){
                    resolve("it is " + body.main.temp + " c in " + body.name) ;
                  } else {
                    return reject(`Location ( ${location} ) not found`);
                  }

                }
             });
  });

};

getWeather("TimBuckTwo")
  .then(function(currentWeahter){
    console.log(currentWeahter);
  }, function(error){
    console.log("ERROR ", error);
  })
