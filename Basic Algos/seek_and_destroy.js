/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
*/


function destroyer(arr) {
  // Remove all the values
  var arrofarg=[];
  var filtered=[];
  for(var i=1;i<arguments.length;i++){
    arrofarg.push(arguments[i]);
  }
  
  for(var j=0;j<arr.length;j++){
    
    for(var k=0;k<arrofarg.length;k++){
      if(arr[j]===arrofarg[k]){
        delete arr[j];
      }
    }
  }
  return  arr.filter(Boolean);
}

destroyer([1, 2, 3], 2, 3);
