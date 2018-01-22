/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  var vowels=['a','e','i','o','u'];
  
  var firstvowl=vowels.map(function(chr){
    if(str.indexOf(chr)!==-1){
    return str.indexOf(chr);
    }
  });
  
   firstvowl.sort(function(a,b){
    return a-b;
  });
  
  if(firstvowl[0]===0){
    return str+'way';
  }
  else{
  var consonant =str.substr(0,firstvowl[0]);
  //console.log(part);
  var arr=str.split('');
  arr.splice(0,firstvowl[0]);
  var str1=arr.join('');
  return str1+consonant+'ay';
  }  
}

console.log(translatePigLatin("eight"));