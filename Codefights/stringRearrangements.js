/*Given an array of equal-length strings, check if it 
is possible to rearrange the strings in such a way that after the 
rearrangement the strings at consecutive positions would differ by exactly one character.

Example
For inputArray = ["aba", "bbb", "bab"], the output should be
stringsRearrangement(inputArray) = false;
All rearrangements don't satisfy the description condition.
For inputArray = ["ab", "bb", "aa"], the output should be
stringsRearrangement(inputArray) = true.
Strings can be rearranged in the following way: "aa", "ab", "bb".*/

function stringsRearrangement(inputArray) {
  var permutations=[];
function permute(n,array){
  
  if(n==1){
    permutations.push([...array]);
  }
  else{
    for(var i=0;i<n;i++){
      permute(n-1,array);
      
      if (n % 2 == 0) {
            //console.log("SWAP ", n, array)
        		var one = array[i];
            var two = array[n - 1];
            array[i] = two;
            array[n - 1] = one;
            //swap(array[i], array[n - 1]);
        }
        else {
            //console.log("SWAP ", 0, n-1)
            var first = array[0];
            var second = array[n - 1];
            array[0] = second;
            array[n - 1] = first;
            //swap(array[0], array[n - 1]);
       }
    }    
  }
}
 permute(inputArray.length,inputArray);
  
 function mismatch(char1,char2){
   var miss=0;
   var arr1=char1.split('');
   var arr2=char2.split('');
   for(var i=0;i<arr1.length;i++){
     if(arr1[i]!==arr2[i]){
       miss++;
     }
   }
   return (miss==1)? true:false;
 }
  var res;
  for(var i=0;i<permutations.length;i++){
    for(var j=0;j<permutations[i].length-1;j++){
      if(!mismatch(permutations[i][j],permutations[i][j+1])){
        res=false;
        break;
      }
      else{
        res=true;
      }
    }
    if(res==true){
      return true;
    }
  }
  return res;
//permute(3,["ab", "bb", "aa");
//console.log(permutations);
}


/*function getpermutation(arr){
  var sequence=[];
  var full=arr.length;
 	var permutation=[];
	function generpermute(a){
    console.log('this is func call with \"a\" now '+a+"---------");
  	for(var i=0;i<a.length;i++){
      var str=a[i];
      console.log("this is \"str\" now "+str+" and \"i\" is "+i);
      sequence.push(str);
      console.log("this is \"sequence\" now "+sequence);
      if(sequence.length==full){
        console.log('full length reached in seuqence');
        permutation.push([...sequence]);
         }
        else{
         	var remaining=[...a.slice(0,i),...a.slice(i+1)]
          console.log("this is \"remaining\" now "+remaining);
         	generpermute(remaining);
         }
      	console.log('popping here')
      	sequence.pop();
      	console.log('popped sequence is '+sequence);
    }
}
   generpermute(arr);
  return permutation;
}
console.log(getpermutation([1,2,3]));*/
