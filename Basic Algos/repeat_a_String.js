/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/


function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<0){
    return "";
  }
  
  switch(num){
    case 1:
    return str;
    default:
  var res=str.concat(str);
  for(var i=1;i<=num-2;i++){
    res=res.concat(str);
    console.log(res);
  }
  }
  return res;
    
}

repeatStringNumTimes("abc", 4);
