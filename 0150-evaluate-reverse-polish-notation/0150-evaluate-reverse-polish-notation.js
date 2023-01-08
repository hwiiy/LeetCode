/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    
    for(let x of tokens){
        if(!isNaN(x)) stack.push(Number(x))
        else {
         
          let rt = stack.pop()
           let lt = stack.pop()
          if(x === "+") stack.push(lt+rt)
          else if(x==="-") stack.push(lt-rt)
          else if(x==="*") stack.push(lt*rt)
          else if(x==="/") stack.push(Math.trunc(lt/rt))
            }
   
    } 
    return stack[0]
   
};


