const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body');
body.style.backgroundColor='#777';

const horse = {
    name: 'Mango',
    racetime: randomIntegerFromInterval(1000, 3000),
}

const race = horse => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const crashed = Math.random() > 0.5;
            if (crashed) {
                reject({
                    horse,
                    errorMessage: 'Crashed'})
            } else ( resolve(horse))
        }, horse.racetime)
    })
};

race(horse).then(horse => {
    console.log(`${horse.name} finished in ${horse.racetime}ms`);
}).catch(error => {
    console.log(`${error.horse.name} ${error.errorMessage}`)
});


function notifyWhenFinished ({name, racetime}) {
    console.log(`${name} finished! in ${racetime}`);
}