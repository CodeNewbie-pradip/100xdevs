// Implement a class `Calculator` having below methods
//     - initialise a result variable in the constructor and keep updating it after every arithmetic operation
//     - add: takes a number and adds it to the result
//     - subtract: takes a number and subtracts it from the result
//     - multiply: takes a number and multiply it to the result
//     - divide: takes a number and divide it to the result
//     - clear: makes the `result` variable to 0
//     - getResult: returns the value of `result` variable
//     - calculate: takes a string expression which can take multi-arithmetic operations and give its result
//       example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
//       Points to Note: 
//         1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
//         2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

class Calculator{
    constructor(){
        this.result=0;
    }

    add(number){
        if(typeof number!=='number'){
            throw new error("this is invalid input, please provide valid number");
        }
        this.result+=number;
    }

    subtract(number){
        if(typeof number!=='number'){
            throw new error("this is invalid input, please provide valid number");
        }
        this.result-=number;
    }

    multiply(number){
        if(typeof number!=='number'){
            throw new error("this is invalid input, please provide valid number")
        }
        this.result*=number;
    }

    divide(numebr){
        if(typeof number!=='number' || number===0){
            throw new error("this is invalid input, please provide valid number or non zero value");
        }
        this.result/=number;
    }
    clear(){
        this.result=0;
    }
    getResult(){
        return this.result;
    }
    calculate(expression){
        const clearExpression=expression.replace(/\s+/g, '');
        if(!/^[\d+\-*/().\s]+$/.test(clearExpression)){
            throw new error("invalid Expression, please provide valid expression");
        }

        try{
            this.result+=eval(clearExpression);
        }catch{
            throw new error("error evaluating expression, please checkk your input");
        }
    }
};

const obj=new Calculator();
obj.add(10);
obj.multiply(2);
obj.calculate('6 - (4 + 1) / 2');
console.log(obj.getResult());