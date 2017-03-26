module.exports = function(worktype, callback)
{
    console.log(new Date(), "Into dowork");
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log(new Date(), "Done");

        if (worktype === "hard working labor"){
          resolve("A OK - hahaha");
        } else {
          reject("you dingbag");
        }
      }, 2000);
    });
}
