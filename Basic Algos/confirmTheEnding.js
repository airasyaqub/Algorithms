function confirmEnding(str, target) {
  var arr=str.split(" ");
  var teststr=arr[arr.length-1];
  var teststrarr=[];
  for(var i=teststr.length-1;i>=0;i--){
    teststrarr.push(teststr[i]);
   }
  var targetarr=target.split('').reverse(); 
 var teststrarr2=[];
  for(var j=0;j<=targetarr.length-1;j++){
      teststrarr2.push(teststrarr[j]);
  }
   if(teststrarr2.join('')===targetarr.join('')){
     return true;
   }
  else{
  return false;
  }
 }

confirmEnding("open sesame", "same");