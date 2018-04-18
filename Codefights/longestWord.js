/*Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
Example
For text = "Ready, steady, go!", the output should be
longestWord(text) = "steady".*/

function longestWord(text) {
  var res=text.match(/\w+/g);
  var word;
  var max=0;
  res.forEach((e)=>{
    if(e.length>max){
      max=e.length;
      word=e;
    }
  });
  return word;  
}
//-------------------------------------------------------------------------------
function longestWord(text) {
    return text.match(/[A-Za-z]+/g).sort((a,b)=>{return b.length > a.length})[0];
}



