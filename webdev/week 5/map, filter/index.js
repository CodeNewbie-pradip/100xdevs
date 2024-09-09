const sum=(a, b)=>{
    return a+b;
}
const ans=sum(1, 2);
console.log(ans);

//map, filter arrow fns
//given an array, given me back a neew array in which every value is mutiplied by 2
//[1, 2, 3, 4, 5]
//[2, 4, 6, 8, 10]

const input=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//solution
const newArray=[];
for(let i=0; i<input.length; i++){
    newArray[i]=input[i]*3;
}
console.log(newArray);

//other solutoon using map
function transform(i){
    return 2*i;
}

const output=input.map(transform);
console.log(output);
