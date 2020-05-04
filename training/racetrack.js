const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const horses = ['Mango', 'Betty', 'Clara', 'Monica', 'Vezuvi', 'Chelsy']
    .map(name => ({
        name,
        racetime: randomIntegerFromInterval(100, 500)
    }));
// console.table(horses);

const race = horse => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const crashed = Math.random() > 0.5;
            if (crashed) {
                reject({
                    horse,
                    errorMessage: 'Crashed!'
                });
            }
            else {
                resolve(horse);
            }
        }, horse.racetime);
    })
};
function notifyOnWinner(horses) {
    Promises.race(horses).then(winner => {
        console.log(`Winner is ${winner.name}`)
    })
}

function notifyWhenRaceFinished(horses) {
    const promises = horses.map(horse => race(horse));
    console.log(promises);
    Promise.all(promises).then(result => {
        console.log('Race finished')
    })
}


// const promiseA = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('A');
//         console.log('a')
//     }, 1000)
// })

// const promiseB = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('B');
//         console.log('b')
//     }, 3000)
// })

// Promise.all([promiseA, promiseB]).then(arr => {
//     console.log(arr)
// })