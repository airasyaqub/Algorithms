/*Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" 
of two sets is the set of elements which are in either of the two sets, 
but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), 
you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).*/

function sym(arg) {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(a,b){
    //console.log(a,b)
    //a.sort(function(a,b){
      //return a-b;
    //});
    //b.sort(function(a,b){
      //return a-b;
    //});
    //console.log('sorted');
    //console.log(a,b)
    //console.log('sorted');
    a=a.filter(function(item,pos){
      return a.indexOf(item)==pos;
    });
     b=b.filter(function(item,pos){
      return b.indexOf(item)==pos;
    });
    //console.log('duplicate removed');
    //console.log(a,b);
    //console.log('duplicate removed');
    a1=a.filter(function(item){
      return b.indexOf(item)==-1;
    });
     b1=b.filter(function(item){
      return a.indexOf(item)==-1;
    });
    //console.log('unsimilar added');
    //console.log(a1,b1);
    //console.log('unsimilara added');
    return a1.concat(b1);
    //console.log('concated');
    //console.log(a);
    //console.log('concated');
    //return a1.sort(function(a,b){
      //return a-b;
    //});
    
  });
}
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));