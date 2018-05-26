/*CodeMaster has just returned from shopping. 
He scanned the check of the items he bought and
 gave the resulting string to Ratiorg to figure out 
 the total number of purchased items. Since Ratiorg is 
 a bot he is definitely going to automate it, so he needs
 a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

Example

For inputString = "2 apples, 12 oranges", the output should be
sumUpNumbers(inputString) = 14.*/

function sumUpNumbers(st) {
   if(/\d+ ?(\w+)?/g.test(st)){
       if(/^\d+$/.test(st)){
           return parseInt(st);
       }
        else{
             var arr=st.match(/\d+/g);
    return arr.reduce(function(a,b){return parseInt(a)+parseInt(b);});  
        }
       }
    else{
        return 0;
    }
}
    
 /* var a=0;
    var b='6';
    console.log(a+ +b);
     console.log(typeof(a+ +b));
    return [].reduce(function(a,b){
     return a+ +b; 
  },0);
}*/

/*function sumUpNumbers(inputString) {
   //console.log(inputString.match(/\d+/g)||[]);
  return (inputString.match(/\d+/g)||[]).reduce(function(a,b){
      console.log(a);
      console.log(b);
     return a+ +b; 
  },0);
}*/