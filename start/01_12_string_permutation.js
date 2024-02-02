// Write your code here
let permString = 1;
function getPermutation(length){
  permString *= length;
  //console.log(permString);
  length--;
  if(length === 1){
    console.log("Word scrabble permutation of the word ",string, "is ",permString);
    return;
  }
  else
    getPermutation(length);
}

const string = "game";
const strLength = string.length;
getPermutation(strLength);
