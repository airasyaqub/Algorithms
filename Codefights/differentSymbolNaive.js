/*Given a string, find the number of different characters in it.
Example
For s = &quot;cabca&quot;, the output should be
differentSymbolsNaive(s) = 3.
There are 3 different characters a, b and c.*/


function differentSymbolsNaive(s) {
    var res=[];
     for(var i=0;i<s.length;i++){
       if(!res.includes(s[i])){
           res.push(s[i]);
       }
    }
  return res.length;
}



