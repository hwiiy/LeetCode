/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let arr= [...String(x)]
    let reverse = [...arr].reverse()
    
    if(arr.join("") === reverse.join("")){
      return true;
    }
  return false;
};