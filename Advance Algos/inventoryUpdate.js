/*Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.*/

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var inventarr=[];
  for(var i=0;i<arr1.length;i++){
     var counter=0;
    for(var j=0;j<arr2.length;j++){
      if(arr1[i][1]===arr2[j][1]){
        var itemarr=[];
        var sum=arr1[i][0]+arr2[j][0];
        itemarr.push(sum);
        itemarr.push(arr1[i][1]);
        inventarr.push(itemarr);
        counter+=1;
      }
    }
    if(counter<1){
      inventarr.push(arr1[i]);
    } 
  }
  
  for(var k=0;k<arr2.length;k++){
    var counter1=0;
    for(var l=0;l<arr1.length;l++){
      if(arr2[k][1]===arr1[l][1]){
        counter1+=1;
      }
    }
    if(counter1<1){
      inventarr.push(arr2[k]);
    }
  }
   return inventarr.sort(function(a, b) {//-ve ma 'a' ko peecha la aye ga +ve mai 'b' ko peecha la aye ga ab is cheez ko dekh kr compare fucntion lgana hota hai andr
    return a[1] > b[1] ? 1 : -1;
  });
  /*var uniarr=[];
  for(var m=0;m<inventarr.length;m++){
    uniarr.push(inventarr[m][1].charCodeAt(0));
  }
  uniarr.sort(function(a,b){
    return a-b;
  });
  var result=[];
  console.log(inventarr);
  console.log(uniarr);
  for(var n=0;n<uniarr.length;n++){
    for(var o=0;o<inventarr.length;o++){
      if(uniarr[n]===inventarr[o][1].charCodeAt(0)){
        result.push(inventarr[o]);
        inventarr.splice(o,1);
        break;
      }
    }
  }  */
  //return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
