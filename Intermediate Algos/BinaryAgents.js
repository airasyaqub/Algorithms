/*Return an English translated sentence of the passed binary string.

The binary string will be space separated.*/

function binaryAgent(str) {
  var arr=str.match(/\b\d+\b/g);//making array of str 
  var exp=[128,64,32,16,8,4,2,1];//exponent array 
  var chararr=[];//array of converted binary to decimal
  for(var i=0;i<arr.length;i++){
    var num=0;
    for(var j=0;j<arr[i].length;j++){
      num+=arr[i][j]*exp[j];//multiplying each binary with exp and adding in num to get decimal number
    }
    chararr.push(num);
  }
  var alph=chararr.map(function(val){//converting decimal to alphabets.
    return String.fromCharCode(val);
  });
  return alph.join('');//joining all alphabets
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
