/*Some people are standing in a row in a park. There are trees between them which cannot be moved. 
Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].*/

function sortByHeight(arr) {
  var arr1=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]!==-1){
      arr1.push(arr[i]);
      delete arr[i];
    }
  }
    arr1.sort(function(a,b){
      return a-b;
    });
    for (var j=0;j<arr1.length;j++){
      for(var k=0;k<arr.length;k++){
        if(arr[k]===undefined){
          arr[k]=arr1[j];
          //arr.splice(k,0,arr1[j]);
          break;
        }
        //break;
      }
    }
return arr;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
