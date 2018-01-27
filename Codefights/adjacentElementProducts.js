/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.*/
//------------------------------------------------
/*var y=0;
function adjacentElementsProduct(inputArray) {
for(var i=0;i<inputArray.length-1;i++){
    var j=i+1;
    var x=inputArray[i]*inputArray[j];
    y=Math.max(x,y);
}
    return y;
}

 adjacentElementsProduct([-1,100]);*/
var arr=[];
function adjacentElementsProduct(inputArray) {
for(var i=0;i<inputArray.length-1;i++){
    var j=i+1;
  //console.log(inputArray[j])
    var x=inputArray[i]*inputArray[j];
  //console.log(x);
    arr.push(x);
  //console.log(y);
}
  
    arr.sort(function(a,b){
    return b-a;});
  var y=arr[0];
 return y;
}
adjacentElementsProduct([-1,100]);

