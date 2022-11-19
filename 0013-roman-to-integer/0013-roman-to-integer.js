/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  
  let sum = 0;
    
    let change =s
    . replaceAll("I","1,")
    . replaceAll("V","5,")
    . replaceAll("X","10,")
    . replaceAll("L","50,")
    . replaceAll("C","100,")
    . replaceAll("D","500,")
    . replaceAll("M","1000,")

    let arr = change.split(",").map(el=>+el)
  console.log(arr)
    
  for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1]){
      arr[i]= arr[i]*-1
    }
  }
  
    for(let item of arr){
      sum += item
    }
  return sum
};