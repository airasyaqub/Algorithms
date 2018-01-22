/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.*/

//noprotect
function smallestCommons(arr) {
  var arr1=[];
  arr.sort(function(a,b){
    return a-b;
  });
  for(var i=arr[0];i<=arr[1];i++){
    arr1.push(i);
  }
  var j=1;
  var result=[];
  var num;
  
  while(result.length==0){
    num=arr1[0]*j;
    for(var k=0;k<arr1.length;k++){
      if(num%arr1[k]!=0){
        break;
      }
      if(num%arr1[k]==0){
        if(k<arr1.length-1){
        continue;
        }
        result.push(num);
      }
    }
    j++;
  }
  
  
 return result[0];
}


smallestCommons([23,18]);