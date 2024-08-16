/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    //step 1: we are check both are equal length or not
    //if they are not equal return false
    if(str1.length !==str2.length){
        return false;
    }

    //step 2:create character counter to count variable
    const output={};

    //step 3: count varible
    for(char of str1){
        output[char]=(output[char] || 0)+1;
    }

    //step 4: subtract the str2 element
    for(char of str2){
        if(!output[char]){//char not present return false
            return false;
        }//otherwise char --
        output[char]--
    }

    //step 5:we are check all element are 0 or not, if 0 means it's anagram otherwise not anagram
    for(const char of Object.values(output)){
        if(char!==0){
            return false;
        }
    }
    return true;
}

const str1='pradip';
const str2='diprap';

if(isAnagram(str1, str2)){
    console.log("it is anagram");
}else{
    console.log("not a anagram");
}

module.exports = isAnagram;