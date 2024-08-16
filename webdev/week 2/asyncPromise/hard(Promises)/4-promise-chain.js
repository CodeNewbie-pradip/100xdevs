/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
            console.log(`wait1:${t}`);
        }, t*1000);
    });
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
            console.log(`wait2:${t}`);
        }, t*1000);
    });
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
            console.log(`wait3:${t}`);
        }, t*1000);
    });
}

function calculateTime(t1, t2, t3) {
    const startTime=Date.now();

    return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
        const endTime=Date.now();
        console.log(endTime-startTime);
    })
}

console.log(calculateTime(1, 2, 3));

module.exports = calculateTime;