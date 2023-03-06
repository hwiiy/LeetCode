/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let sH = new Map();
    for(let x of nums){
        if (sH.has(x)) sH.set(x,sH.get(x)+1)
        else sH.set(x,1)
    }
  
    
    for(let [k,v] of sH){
        if (v>1) return k
    }
};