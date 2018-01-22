/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
---------------------------------------------------------------------*/

/*function uniteUnique(arr) {
  var arr= Array.prototype.slice.call(arguments);
  console.log(arr);
  var result=[];
  for(var i=0;i<arr[0].length;i++){
    result.push(arr[0][i]);
  }
  for(var j=1;j<arr.length;j++){
    for(var k=0;k<arr[j].length;k++){
      if(arr[0].indexOf(arr[j][k])==-1){
        result.push(arr[j][k]);
      }
    }
  }
  console.log(result);
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
-----------------------------------------------------------------------------
function uniteUnique(arr) {
  var arr= Array.prototype.slice.call(arguments);
  var result=arr[0];
  var test=arr[0];
  arr.splice(0,1);
  var final=arr.reduce(function(tot,val){
    var ar=val.filter(function(a){
      return test.includes(a)===false;
    });
     return tot.concat(ar);
    
  },[]);
  console.log(final);
  return result.concat(final);
  //return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
-----------------------------------------------------------------------------------*/
function uniteUnique(arr) {
  var arg= Array.prototype.slice.call(arguments);
  var result=arg[0];
  var test=arg[0];
  arg.splice(0,1);
  var final=arg.reduce(function(tot,val){
    return tot.concat(val.filter(function(a){
      return test.includes(a)===false;
    }));
  },[]);
  return result.concat(final);
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

