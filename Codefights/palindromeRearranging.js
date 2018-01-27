/*Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.*/

function palindromeRearranging(inputString) {
  
 
  
var counts = {};
var res=[];
var yup;

var ch, index, len, count;
for (index = 0, len = inputString.length; index < len; ++index) {

    ch = inputString.charAt(index); 

    count = counts[ch];

    counts[ch] = count ? count + 1 : 1;
}
  
  for (ch in counts) {
    console.log(ch + " count: " + counts[ch]);
    res.push(counts[ch]);
}
  return res.filter(function(val){
    	return val%2!==0;
  }).length<2;
    
}

