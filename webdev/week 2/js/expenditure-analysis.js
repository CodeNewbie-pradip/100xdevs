/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const output=[];

    for(let i=0; i<transactions.length; i++){
        let categoryFound=false;
        for(let j=0; j<output.length; j++){
            if(transactions[i]['category']===output[j]['category']){
                output[j]['totalSpent']+=transactions[i]['price'];
                categoryFound=true;
                break;
            }
        }
        if(!categoryFound){
            output.push(
            {
                id:transactions[i]['id'],
                timestamp:transactions[i]['timestamp'],
                totalSpent:transactions[i]['price'],
                category:transactions[i]['category'],
                itemName:transactions[i]['itemName']
            });
        }
    }
    return output;
  }
//   const transactions=[
//     {id: 1,	timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza'},
//     {id: 2, timestamp: 1656076800010, price: 20, category:'groceries', itemName:'sugar'},
//     {id: 3, timestamp: 1656076800020, price: 30, category:'groceries', itemName:'milk'},
//     {id: 4, timestamp: 1656076800030, price: 40, category:'clothes', itemName:'t-shirts'},
//     {id: 5, timestamp: 1656076800040, price: 60, category:'electronics', itemName:'iron'},
//   ];
  console.log(calculateTotalSpentByCategory(transactions));
  
  module.exports = calculateTotalSpentByCategory;