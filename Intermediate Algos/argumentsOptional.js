/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined
*/

function addTogether() {
  var args = Array.prototype.slice.call(arguments);
  for(var i=0;i<args.length;i++){
    if(typeof args[i]!=='number'){
      return undefined;
    }
  }
  if(args.length>1){
    return args[0]+args[1];     
  }
  else if(args.length===1){
    return function(y){
      if(typeof y!=='number'){
        return undefined;
      }
      else{
      return y+args[0];
      }
    };
  }
  
}

var num=addTogether(2);
num(7);