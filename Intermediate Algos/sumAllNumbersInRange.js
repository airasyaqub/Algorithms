/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

/*function sumAll(arr) {
  arr.sort(function(a,b){
    return b-a;
  });//[10,5]
  var diff=arr[0]-arr[1];
  var total=arr[1];
  //console.log(total);
  for(var i=0;i<diff;i++){
    var inc=++arr[1];
    total+=inc;
  }
  return total;
}

sumAll([5, 10]);*/


function sumAll(arr) {
  arr.sort(function(a,b){
    return a-b;
  });
  var diff=arr[1]-arr[0];
  var inc=arr[0];

  console.log(arr);
  for(var i=1;i<diff;i++){
    inc++;
    console.log(inc);
    console.log(arr.push(inc));
  }
 return arr.reduce(function(a,b){
          return a+b;            
                      });
}

console.log(sumAll([10, 5]));
