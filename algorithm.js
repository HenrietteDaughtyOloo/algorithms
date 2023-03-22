function mergeSortTopDown(){
  if(Array.length <= 1){
      return array


  }


  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle)


  return mergeTopDown(mergeSortTopDown(left),mergeSortTopDown(right));
}
function mergeTopDown(left, right){


  const array = [];
   while(left.length && right.length){
      if(left[0] < right[0]){
          array.push(left.shift())
      } else{
          array.push(right.shift())
      }


  }


return array.concat(left.slice()).concat(right.slice());
}






(function test(){
  const testArray1 = [4,5,2,1,3,8];
  console.log(mergeSortTopDown(testArray1))
}
)
()










//et num = [45,12,6,89,2,5]
let target = 6;
let firstIndex = 0;
let lastIndex = num.length-1;
let middleIndex = Math.floor((firstIndex+lastIndex)/2);
while(num[middleIndex]!==firstIndex<=lastIndex){
  console.log(middleIndex);
  console.log(firstIndex);
  console.log(lastIndex);
  if(num[middleIndex]>6){
      lastIndex=middleIndex-1;
  }  else{
      lastIndex=middleIndex+1;
  }
  middleIndex=Math.floor((firstIndex+lastIndex)/2);{
  }
  return num[middleIndex]===lastIndex-1;
