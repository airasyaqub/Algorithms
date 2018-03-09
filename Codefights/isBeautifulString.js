/*A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

Given a string, check whether it is beautiful.

Example

For inputString = "bbbaacdafe", the output should be
isBeautifulString(inputString) = true;
For inputString = "aabbb", the output should be
isBeautifulString(inputString) = false;
For inputString = "bbc", the output should be
isBeautifulString(inputString) = false.*/

function isBeautifulString(inputString) {
    var arr=inputString.split('').sort();
    var chararr=[];
    var lastchar= arr[arr.length-1].charCodeAt(0);
    for(var k=97;k<=lastchar;k++){
        var alph=String.fromCharCode(k);
        chararr.push(alph);
    }
    var charObj={};
    for(var i=0;i<arr.length;i++){
        if(charObj.hasOwnProperty(arr[i])==false){
            charObj[arr[i]]=1;
        }
        else{
            charObj[arr[i]]= charObj[arr[i]]+1;
        }
    }
        chararr.forEach(function(elm){
           if(charObj.hasOwnProperty(elm)==false){
               charObj[elm]=0;
           } 
        });
    var newarr=[];
    arr.forEach(function(elm){
        if(newarr.indexOf(elm)==-1){
            newarr.push(elm);
        }
    });
    
    for(var j=0;j<newarr.length;j++){
        var code=newarr[j].charCodeAt(0);
        if(code>97){
            var prevcode=code-1;
            var prevletter=String.fromCharCode(prevcode);
        }
        
        if(charObj[newarr[j]]>charObj[prevletter]){
            return false;
        }
    }
    
    return true;
}
