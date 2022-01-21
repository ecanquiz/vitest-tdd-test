export default function (callback) {
  console.log('Ready....go!');
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback("peanut butter");
  }, 1000);
}


