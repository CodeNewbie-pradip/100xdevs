const fs=require("fs");

//fucntion to perform an expensive operation(e.g., a loop)
function expensiveOperation(){
    let sum=0;
    for(let i=0; i<1e9; i++){
        sum+=i;
    }
    console.log('expensive operation completed');
}

//Asynchronously read the file contents
fs.readFile('abc.txt', 'utf-8', (err, data)=>{
    if(err){
        console.error('error reading file', err);
        return;
    }
    console.log('file content: ',data);
});

//perform excpensive operation
expensiveOperation();
console.log('async file is read intiated ...');

// //################## sync operation ###############
// const fs=require("fs");

// //fucntion to perform an expensive operation(e.g., a loop)
// function expensiveOperation(){
//     let sum=0;
//     for(let i=0; i<1e9; i++){
//         sum+=i;
//     }
//     console.log('expensive operation completed');
// }

// //Asynchronously read the file contents
// const data=fs.readFileSync('abc.txt', 'utf-8');

// console.log('file content: ',data);

// //perform excpensive operation
// expensiveOperation();
// console.log('sync file is read intiated ...');