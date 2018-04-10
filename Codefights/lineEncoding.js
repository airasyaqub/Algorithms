/*Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc".*/

function lineEncoding(s) {
    s=s.split('');
    var arr=[];
    s.forEach(function(e,i){
           if(s[i]==s[i-1]){
               var str=arr[arr.length-1]+e;
               arr.pop();
               arr.push(str);
           }
           else{
               arr.push(e);
           }
    
    });
    arr.forEach(function(e,i){
        if(e.length>1){
            var q=e.length;
            arr.splice(i,1,q+e[0]);
        }
    })
    return arr.join('');
}


//------------------------------------------------------------------------

function lineEncoding(s) {
    return s.replace(/(.)\1+/g, chars => chars.length + chars[0]);
}

