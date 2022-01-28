export const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    console.log('Initializing the food database ...');
    setTimeout(
      () => console.log("Initialized the Food database !!!"),
      1000
    );
  })
};

export const clearDatabase = () => {
  return new Promise((resolve, reject) => {
    console.log('Clearing City Database ...');
    setTimeout(
      () => console.log("Clearing Food Database ...!"),
      1000
    );
  })
};

export const isIt = req => {
  return new Promise((resolve, reject) => {
    console.log('Ready....go!');
    setTimeout(() => {
      console.log("Time's up -- stop!");
      return req === 'Vienna'
    }, 1000);
  })
};
