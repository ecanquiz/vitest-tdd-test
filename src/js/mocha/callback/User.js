const User = function (name = "") {
  this.name = name; 
  
  this.save = function (callback) {
    console.log('Ready....go!');
    setTimeout(() => {
      console.log("Time's up -- stop!");
      callback();      
    }, 1000);
  }
}

export default User;


