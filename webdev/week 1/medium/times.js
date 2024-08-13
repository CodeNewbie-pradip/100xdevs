/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const startTime=new Date();//start time

    let sum=0;

    for(let i=1; i<=n; i++){
        sum+=i;
    }
    const endTime=new Date();//end time

    const elapsedTime=(endTime-startTime)/1000;//calculate time in second

    return elapsedTime;
}

let n1=100;
let n2=100000;
let n3=1000000000;

console.log(`time for sum 0 to ${n1}:=>${calculateTime(n1)} second`);
console.log(`time for sum 0 to ${n2}:=>${calculateTime(n2)} second`);
console.log(`time for sum 0 to ${n3}:=>${calculateTime(n3)} second`);