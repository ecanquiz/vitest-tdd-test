export default function (req = true) {
  return new Promise((resolve, reject) => {
    console.log('Ready....go!');
    setTimeout(function(){
      console.log("Time's up -- stop!");
      req
        ? resolve("peanut butter")
        : reject("error");      
    }, 1000);
  })
};
