module.exports = function(workparam, callback)
{
  console.log(new Date(), "Into dowork 2 == param =>", workParam);
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log(new Date(), "Done");
      // resolve("B OK");
      reject("something fishy 2");
    }, 3000);
  });
}
