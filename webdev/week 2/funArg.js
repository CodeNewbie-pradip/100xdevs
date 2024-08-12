//simple functiton argument
function add(a, b){
    return a + b;
  }
  
  let sum=add(5,6);
  console.log(sum);

  //example 2
  //function as an argument
function greet(name){
  return `hello ${name}`;
}

function processUserInput(callback){
  let name="pradip";
  return callback(name);
}

let greetingMessage=processUserInput(greet);
console.log(greetingMessage);

//Example 3
//Default function argument
function mul(a, b=2){
  return a*b;
}
console.log(mul(5, 6));
console.log(mul(5));

//Example 4
//Rest Parameter
console.log("Rest Parameter");
function sumAll(...number){
  return number.reduce((sum, current)=> sum+current, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 6, 9));