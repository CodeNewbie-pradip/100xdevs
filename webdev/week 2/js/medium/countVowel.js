/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
//approach 1
function countVowels(str) {
    // Your code here
    let countVowelsChar=0;
    
    for(char of str){
        char=char.toLowerCase();
        if(char==='a' || char ==='e' || char ==='i' || char==='o' || char ==='u'){
            countVowelsChar++;
        }
    }
    return countVowelsChar;
}

function countVowel2(str){
    //declare vowel array
    const vowelArray=['a',  'e', 'i', 'o', 'u'];

    let countVowelsChar=0;

    for(char of str){
        if(vowelArray.includes(char)){
            countVowelsChar++;
        }
    }
    return countVowelsChar;
}

//const str='pradip';
const str='hello, world!';
console.log(countVowel2(str));

module.exports = countVowels;