/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) { // LBH QVQ VG!
  var arr=[];
  for(var i=0;i<str.length;i++){
    
    n=str.charCodeAt(i);
    if(n<65||n>90){
      arr.push(str[i]);
    }
    else{
    var b=n+13;
    if(b>90){
      var n1=n-13;
      arr.push(String.fromCharCode(n1));
    }
    else{
      arr.push(String.fromCharCode(b));
    }
  }
  }
  return arr.join('');
}
rot13("SERR YBIR?");