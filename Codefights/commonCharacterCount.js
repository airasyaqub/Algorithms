/*Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".*/

function commonCharacterCount(s1, s2) {
var sa1=s1.split('');
  var sa2=s2.split('');
  var arr=[];
  
  for(var i=0;i<sa1.length;i++){
    for(var j=0;j<sa2.length;j++){
      if(sa1[i]===sa2[j]){
        arr.push(sa1[i]);
        delete sa2[j];
        break;
      }
    }
  }
  return arr.length;
}

 console.log(commonCharacterCount('aabcc', 'adcaa'));