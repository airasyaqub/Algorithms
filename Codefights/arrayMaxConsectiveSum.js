/*Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.*/
//-------------------------------------------------------------------------

function arrayMaxConsecutiveSum(inputArray, k) {
        var sum=0;
        var max=0;
        
        for(var i=0;i<inputArray.length;i++){
                sum+=inputArray[i];
                if(i>=k){ sum-=inputArray[i-k];}
                if(sum>max){max=sum;}
        }
        return max;
}




//--------------------------------------------------------------------------
function arrayMaxConsecutiveSum(inputArray, k) {
        var result=[];
        var flag=false;
        function genersum(arr){
            if(arr.length<k){
                flag=true;
                return;
            }
                else{
                var sum=arr.reduce(function(a, b) { return a+b; });
                result.push(sum);
                }         
                                }
        
        for(var i=0;i<inputArray.length;i++){
                if(flag==true){
                        break;
                        }
                var arr1=inputArray.slice(i,i+k);
                genersum(arr1);
                }
     return result.reduce(function(a, b) { return Math.max(a, b); });
}

//----------------------------------------------------------------------------------
function arrayMaxConsecutiveSum(inputArray, k) {
        var res=[];
      // for(var i=0;i<inputArray.length;i++){
      inputArray.forEach(function(elem,i){
         var sum=0;
         var comval=((inputArray.length-1)-i)+1;
        
        if(comval>=k){
          for(var j=0;j<k;j++){
          sum+=inputArray[i+j];
              }
         res.push(sum);
         } 
 
      });
        
       //}
  //return res.sort(function(a,b){
   //return b-a;
  //})[0];
  return res.reduce(function(a, b) { return Math.max(a, b); });
}
