/*Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {
  var steamrolled = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var subArray = steamrollArray(arr[i]);
      steamrolled = steamrolled.concat(subArray);
    } else {
      steamrolled.push(arr[i]);
    }
  }
  return steamrolled;
}
steamrollArray([8, [2],[3, [[4]]]]);
/*var result=[];
function steamrollArray(arr) {
  // I'm a steamroller, baby
  //var result=[];
  for(var i=0;i<arr.length;i++){
    console.log('element is '+arr[i]);
    if(Array.isArray(arr[i])==true){
      steamrollArray(arr[i]);
    }
    
    else {
            console.log('pushing is '+result.push(arr[i]));
            }
  }
  console.log('this is ' +result);
}

steamrollArray([8, [2],[3, [[4]]]]);*/
