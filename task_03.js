const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function makeTransaction (transaction) {
    const time = randomIntegerFromInterval(200,500);
    return new Promise ((resolve, reject) => {
        const errorLog = `Error processing transaction ${transaction.id}. Please try again later.`;
        const successLog = `Transaction ${transaction.id} processed in ${time}ms`;
        const success = Math.random() > 0.3;
        setTimeout(() => {
            if(success) {
                resolve(successLog)
            } else (reject(errorLog))
        }, time)
    })};
const logError = e => console.warn(e);
const logSuccess = e => console.log(e);

makeTransaction({ id: 70, amount: 150 })
.then(logSuccess)
.catch(logError);

makeTransaction({ id: 71, amount: 230 })
.then(logSuccess)
.catch(logError);

makeTransaction({ id: 72, amount: 75 })
.then(logSuccess)
.catch(logError);

makeTransaction({ id: 73, amount: 100 })
.then(logSuccess)
.catch(logError);


// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError)
//   const logSuccess = (id, time) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };
  
  /*
   * Работает так
   */
//   makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
//   makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
//   makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
//   makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
  /*
   * Должно работать так
   */
