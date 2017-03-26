
var doWork = require('./app/dowork_1_promise.js');
var doWork2 = require('./app/dowork_2_promise.js');

doWork("hard working labor").then(function(whatsup){
  console.log(new Date(), whatsup);
  return doWork2(whatsup);
}).then(function(whatsup2){
  console.log(new Date(), whatsup2);
  console.log(new Date(), 'All Done');
}).catch(function(msg){
  console.log(new Date(), "if any one above fail, comes here error => " + msg);
})
