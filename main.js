//Write a function that takes in an array of integers and the array with duplicates removed

Ex:
Input: [1,2,2,3]
Output: [1,2,3]

Input: [4,5,4,4,7,5]
Output: [4,5,7]

Input: [1,2,3,5]
Output: [1,2,3,5]

var deduper = function (numArr){
  var newArr = [];
  for (var i = 0; i < numArr.length; i++){
    if(!newArr.includes(numArr[i])){
      newArr.push(numArr[i]);
    }
  }
}
