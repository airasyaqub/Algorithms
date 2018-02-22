/*Given array of integers, remove each kth element from it.
Example
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].*/


//Solution 1---------------------------------
function extractEachKth(inputArray, k) {
    return inputArray.filter(function(el,i){
       return (i+1)%k!=0;
    });
}




//Solution 2---------------------------------
function extractEachKth(inputArray, k) {
       var genarr=[];
      generatearrays(inputArray,k);
       function generatearrays(array,n){
          if(array.length<n){
             if(array.length>0){
                genarr.push([...array]);
             }  
       }
       else{
       var newarr=array.slice(0,n);
         array.splice(0,n);
       genarr.push([...newarr]);
       generatearrays(array,n);
       
              }    
       }
   //console.log(genarr);
   var resarr=[];
   genarr.forEach(function(e){
      if(e.length<k){
         e.forEach(function(e2){
            resarr.push(e2);
         });
      }
      else{
          e.forEach(function(e1,i){
               if(i!=e.length-1){
               resarr.push(e1);
                  }
               });
            }
     
   });
   return resarr; 
}



//Solution 3----------------------------------------------
function extractEachKth(inputArray, k) {
     var k1=k;
    inputArray.forEach(function(e,i){
        console.log(k,k-1,i);
       if(i==k1-1){
           inputArray.splice(i,1,null);
           k1+=k;
       } 
    });
    return inputArray.filter(function(e){
       return e!=null; 
    });
}
