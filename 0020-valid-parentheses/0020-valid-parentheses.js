/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = []
  const pair ={
    "(":")","{":"}","[":"]"
  };
  
  for(let i=0;i<s.length;i++){
    if(s[i] in pair) //open tag 일 경우
      stack.push(s[i])
    else // close tag일 경우
    {
      if(pair[stack.pop()] !== s[i]) return false;
    } 
  }
  
  return stack.length ===0
}
