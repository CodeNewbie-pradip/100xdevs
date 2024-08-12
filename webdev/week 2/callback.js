//Example 1
//simple callBack
function greet(name, callBack){
    console.log(`hello ${name} !`);
    callBack();
}

function showGreetingComplete(){
    console.log("greeting is complete!");
}

greet("pradip", showGreetingComplete);

//Example 2
//asynchronously callback

const fs=require("fs");
const { resolve } = require("path");

fs.readFile("abc.txt", "utf-8", function(err, data){
    if(err){
        console.error("error the reading file", err);
    }
    console.log(data);
});

console.log("This will log first, before file content is read");

//Example 3
//callback hell

setTimeout(()=>{
    console.log('first task');
    setTimeout(()=>{
        console.log("second task");
        setTimeout(()=>{
            console.log("third task");
        }, 1000);
    }, 1000);
}, 1000);

//Example 4
//Avoiding callback hell
const firstTask=()=>new Promise(resolve=>{
    console.log("first Task in promise");
    resolve();
});
const secondTask=()=>new Promise(resolve=>{
    console.log("Second Task in promise");
    resolve();
});

const thirdTask=()=>new Promise(resolve=>{
    console.log("third Task in promise");
    resolve();
});

firstTask()
.then(thirdTask)
.then(secondTask)
.catch(err=>console.error(err));