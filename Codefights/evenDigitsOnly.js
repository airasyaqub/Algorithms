/*Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.*/

function evenDigitsOnly(n) {
    var res=true;
    n.toString().split('').forEach(function(elem){
      if(parseInt(elem)%2>0){
      res=false;
      }
   });
   return res;
}