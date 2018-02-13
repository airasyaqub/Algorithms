/*Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).*/

function alphabeticShift(inputString) {
    var arr=[];
    inputString.split("").forEach((elem)=>{(elem=='z') ? arr.push('a'):arr.push(String.fromCharCode(elem.charCodeAt(0)+1));});
     return arr.join('');
}