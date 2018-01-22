function titleCase(str) {
  var arr=str.toLowerCase().split(" ");//making array of string in arr.
  var arr1=[];
  for (var i=0;i<arr.length;i++){
     arr1.push(arr[i].replace(arr[i][0],arr[i][0].toUpperCase()));
    
}  
  
  return arr1.join(" ");
}

titleCase("I'm a little tea pot");

/*function titleCase(str) {
  var newArr = [];
  var newStr = "";
  var lowerCaseArr = str.toLowerCase().split(" ");
  for(i=0;i<lowerCaseArr.length;i++){
	newArr.push(lowerCaseArr[i].replace(lowerCaseArr[i][0], lowerCaseArr[i][0].toUpperCase()));
	}
  newStr = newArr.join(" ");
  return newStr;
}

titleCase("I'm a little tea pot");*/
