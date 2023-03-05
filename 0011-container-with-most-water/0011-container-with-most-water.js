/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
let lt = 0
let rt = height.length-1
let maxArea = 0
while(lt<=rt){
  const area = Math.min(height[lt],height[rt])*(rt-lt)
  maxArea = Math.max(area,maxArea)
  
  if(height[lt]<height[rt]){
    lt++
  }else{
    rt--
  }
  
}
return  maxArea
}