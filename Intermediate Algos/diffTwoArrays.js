/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newarr1=arr1.filter(function(item){
    return arr2.indexOf(item)==-1;
  });
  var newarr2=arr2.filter(function(item){
    return arr1.indexOf(item)==-1;
  });
  var results=newarr1.concat(newarr2);
  return results;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
