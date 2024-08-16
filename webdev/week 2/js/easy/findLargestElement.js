/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxi=Number.MIN_VALUE;

    for(num of numbers){
        if(maxi<num){
            maxi=num;
        }
    }
    return maxi;
}

const numbers=[3, 7, 8, 9, 1]
console.log(findLargestElement(numbers));

module.exports = findLargestElement;