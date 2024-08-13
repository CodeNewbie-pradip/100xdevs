/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    //declare array, this will be final output array
    const output=[];

    let categoryFound;
    for(let i=0; i<transactions.length; i++){
        categoryFound=false;
        for(let j=0; j<output.length; j++){
            if(transactions[i]['category']===output[j]['category']){
                output[j]['totalSpent']+=transactions[i]['price'];
                categoryFound=true;
                break;
            }
        }
        if(!categoryFound){
            output.push({
                itemName:transactions[i]['itemName'], 
                category:transactions[i]['category'], 
                totalSpent:transactions[i]['price'], 
                timestamp:transactions[i]['timestamp']
                });
        }
    }
    return output;
  }

  const transactions=[
    {itemName:'sugar', category:'Groceries', price:50, timestamp:'10:00'},
    {itemName:'iron', category:'Electronics', price:300, timestamp:'12:00'},
    {itemName:'salt', category:'Groceries', price:10, timestamp:'03:00'},
    {itemName:'t-shirt', category:'Clothing', price:400, timestamp:'01:00'}
  ];

  console.log(calculateTotalSpentByCategory(transactions));
  
  module.exports = calculateTotalSpentByCategory;