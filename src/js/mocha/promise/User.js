function User(name = "") {
  this.name = name; 
  
  this.save = (error=false) => {
  
    return new Promise((resolve, reject) => {
      console.log('Ready....go!');
      setTimeout(function(){
        console.log("Time's up -- stop!");
        !error
          ? resolve("Without error !!")
          : reject("With error !!");
      }, 1000);
    })
  }  
}


export default User;
