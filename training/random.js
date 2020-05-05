const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const logger = e => console.log(e);

setInterval(() => {
    logger(`Random number is ${randomIntegerFromInterval(1, 200)}`)
}, 1000);