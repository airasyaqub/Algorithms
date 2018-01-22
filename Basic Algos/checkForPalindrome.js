
function palindrome(str) {
  // Good luck!
  var a=str.replace(/[\W_]/g,"").toLowerCase();//.replace(/\W/gi,"").replace(/\s/gi,"").replace(/\d/gi,"").toLowerCase();
  
  var teststr=str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");
  
  if(teststr==a){
    
  
  return true;
}
  else{
    return false;
  }
}


palindrome("2_A3*3#A2");
