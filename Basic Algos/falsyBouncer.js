/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
 return arr.filter(function(x){
    //var a = Boolean(x);
    //if(a){
      return x;
    //}
  });
}

console.log(bouncer([7, "ate", "", false, 9]));
/*function bouncer(arr) {

   function truthy(value) {
   return value;
   }

   var filtered = arr.filter(truthy);
   return filtered;
 }

 bouncer([7, "ate", "", false, 9]);*/

