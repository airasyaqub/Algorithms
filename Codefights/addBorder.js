/*Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]*/

function addBorder(picture) {
    var len=picture[0].length+2;
    var result=[];
    var str='';
    picture.forEach(function(val,i){
        result.push('*'+val+'*');  
    });
    
    for(var i=0;i<len;i++){
        str+='*';
    }
    
    result.unshift(str);
    result.push(str);
    return result;

}

addBorder(["abc","ded"]);