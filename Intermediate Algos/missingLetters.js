/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

/*function fearNotLetter(str) {
 var start=str.charCodeAt(0);
 var end=str.charCodeAt(str.length-1);
 //console.log(start); 
 //console.log(end); 
   var chararr=[];
  for(var i=start;i<=end;i++){
    chararr.push(String.fromCharCode(i));  
  }
  
  if(chararr.length===str.length){
    return undefined;
  }
  else{
  var argarr=str.split('');
  console.log(chararr);
  console.log(argarr);
  for( var j=0;j<chararr.length;j++){
    for(var k=0;k<argarr.length;k++){
      if(chararr[j]===argarr[k]){
        //chararr.splice(chararr[j],1);
        argarr.splice(argarr[k],1);
        break;
      }
      else {
        return chararr[j];
      }
    }
  }
  }
  console.log(chararr);
  
  
  
  //return chararr[0];
}

console.log(fearNotLetter("abcdefghijklmno"));*/

function fearNotLetter(str) {
 var start=str.charCodeAt(0);
 var end=str.charCodeAt(str.length-1);
   var chararr=[];
  for(var i=start;i<=end;i++){
    chararr.push(String.fromCharCode(i));  
  }
  
  if(chararr.length===str.length){
    return undefined;
  }
  else{
  var argarr=str.split('');
  chararr= chararr.filter(function(chr) {
  return argarr.indexOf(chr) == -1;
});
   }  
  return chararr[0];
}
console.log(fearNotLetter("abcdefghiklmno"));