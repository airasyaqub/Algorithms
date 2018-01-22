/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs 
(second argument). 
Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument)
,because it contains the property and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  
  var result = [];
  var arr1=Object.keys(source);
  console.log(arr1);
  
  for(var i=0;i<collection.length;i++){
    
    for(var j=0;j<arr1.length;j++){
      if(collection[i].hasOwnProperty(arr1[j])===false){ //Check 1 if false go to next object  in collection
        break;
      }
      else if(collection[i].hasOwnProperty(arr1[j])){
        console.log(source[arr1[j]],collection[i][arr1[j]]);
        if(source[arr1[j]]!==collection[i][arr1[j]]){ //Check 2 if value is not equal break loop and goto next object in collection
          break;
        }
        if(j !==(arr1.length - 1)) // or else if(j < arr1.length - 1) 
        continue;  // if both check passes go for  next  property of source to check in object;
      }
      result.push(collection[i]); //if all values are present and checked in object push it in result array.
    }
  }
  return result;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
