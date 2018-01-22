/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  
  var arr1= [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900];
  
  var arr2=['I','II','III','IV','V','VI','VII','VIII','IX','X','XX','XXX','XL','L','LX','LXX','LXXX','XC','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
  
  if (num == 0) return [0];
  var arr = [];
  var i = 1;
  while (num > 0) {
    arr.unshift((num % 10) * i);
    num = Math.floor(num / 10);
    i *= 10;
  }
  //if(arr.length==4){
  //arr[0]=''+arr[0]; 
  //}
  var result=[];
  console.log(arr);
  
   //if(arr[0]>=1000){
  //arr[0]=''+arr[0];
     // var s=arr[0]/1000;
    //for(var j=1;j<=s;j++){
      //result.push('M');
    //} 
   //}
  
  for(var k=0;k<arr.length;k++){
    
    if(arr[k]>=1000){
  //arr[0]=''+arr[0];
      var s=arr[k]/1000;
    for(var j=1;j<=s;j++){
      result.push('M');
    }
      continue;
   }
    
    console.log(arr[k]);
   var ind1=arr1.indexOf(arr[k]);
    //if(ind==-1){
      //break;
    //}
    result.push(arr2[ind1]);
  }
   //var inde=result.indexOf(null);  //Important line
  //result.splice(inde,1);  //Important line
   //var ind2=result.indexOf(null);
  //result.splice(ind2,1);
  console.log(result);
  return result.join('');
}

convertToRoman(2023);
/*
let num=2080;
if (num == 0) return [0];
  var arr = [];
  var i = 1;
  while (num > 0) {
    arr.unshift((num % 10) * i);
    num = Math.floor(num / 10);
    i *= 10
  }
  arr[0]=''+arr[0];

console.log(arr[0][0]);*/

