/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot notation or [] notation.*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var i=0;i<collection.length;i++){
    if(!collection[i].hasOwnProperty(pre)||collection[i][pre]==undefined||collection[i][pre]==null||Number.isNaN(collection[i][pre])||collection[i][pre]==0||collection[i][pre]==""||collection[i][pre]==false){
      return false;
  }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

