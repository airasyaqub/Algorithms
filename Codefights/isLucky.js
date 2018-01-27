/*Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
Given a ticket number n, determine if it's lucky or not.*/

function isLucky(n) {
var n1=n.toString();
  var n1a=n1.split('');
  var res=0;
  for(var i=0;i<(n1a.length)/2;i++){
    res=Number(n1a[i])+res;
  }
  var res1=0;
  for(var j=(n1a.length)/2;j<n1.length;j++){
    res1=Number(n1a[j])+res1;
  }
  if(res===res1){
    return true;
  }
  else{
    return false;
  }
}
console.log(isLucky(239017));