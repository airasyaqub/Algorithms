/*Given an array of strings, return another array containing all of its longest strings.*/

function allLongestStrings(inputArray) {
  var size=[];
  for (var i=0;i<inputArray.length;i++){
    size.push(inputArray[i].length);
  }
  size.sort(function(a,b){
    return b-a;
  });
  var lar=size[0];
  function chk(x){
    return x.length===lar;
  }
  return inputArray.filter(chk);
}
console.log(allLongestStrings(["aba","aa","ad","vcd","aba"]));

