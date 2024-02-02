// Write your code here
let permString = 1;
function getPermutation(length){
  permString *= length;
  //console.log(permString);
  length--;
  if(length <= 1)
    return 1;
  else
    getPermutation(length);
}

const string = "game";
const strLength = string.length;
getPermutation(strLength);
console.log("Word scrabble permutation of the word ",string, "is ",permString);
