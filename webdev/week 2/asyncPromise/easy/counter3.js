//counter with setInterval
// let count=0;

// const intervalId=setInterval(()=>{
//     count++;
//     console.log(`Counter with setinterval: ${count}`);

//     //stop the counter after it reaches 10
//     if(count===10){
//         clearInterval(intervalId);
//     }
// },1000);

// console.log(intervalId);

//counter without setinterval
let count2=0;

function recursiveCounter(){
    count2++;
    console.log(`counter without setInterval: ${count2}`);

    //stop the counter it reaches the 10
    if(count2<10){
        setTimeout(recursiveCounter, 1000);
    }
}

//start the counter
console.log(recursiveCounter());