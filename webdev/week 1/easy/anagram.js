/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    //first remove the space and convert in lowercase
    const clearStr1=str1.replace(/\s/g, '').toLowerCase();
    const clearStr2=str2.replace(/\s/g, '').toLowerCase();

    //separate with single woed and sort the both string
    const sortStr1=clearStr1.split('').sort().join('');
    const sortStr2=clearStr2.split('').sort().join('');

    return sortStr1===sortStr2
}

let str1='listen';
let str2='silent';

if(isAnagram(str1, str2)){
    console.log("both string is anagram");
}else{
    console.log("both string are not anagram");
}

module.exports = isAnagram;