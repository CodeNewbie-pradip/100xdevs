/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
//Approach 1:
function isAnagram(str1, str2) {
    //first remove the space and convert in lowercase
    const clearStr1=str1.replace(/\s/g, '').toLowerCase();
    const clearStr2=str2.replace(/\s/g, '').toLowerCase();

    //separate with single woed and sort the both string
    const sortStr1=clearStr1.split('').sort().join('');
    const sortStr2=clearStr2.split('').sort().join('');

    return sortStr1===sortStr2
}

//Approach 2 count character
function isAnagram2(str1, str2){
    //step 1:first create object to count char
    const charCount={};

    //step 2: count charcter of str1
    for(char of str1){
        charCount[char]=(charCount[char] || 0)+1;
    }
    //step 3: substract charachter from the str2
    for(char of str2){
        if(!charCount[char]){
            return false;
        }
        charCount[char]--;
    }

    //step 4: check all the char are 0 or not, 0 means it is panagram
    for(const count of Object.values(charCount)){
        if(count!=0){
            return false;
        }
    }

    return true;
}
let str1='pidarp';//'listen';
let str2='pradip';//'silent';

if(isAnagram2(str1, str2)){
    console.log("The two strings are anagrams of each other.");
}else{
    console.log("The two strings are not anagram !");
}

module.exports = isAnagram;