/*Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.*/

function arrayMaximalAdjacentDifference(inputArray) {
    
    arr=[];
    inputArray.forEach(function(val,i){
          
        if(i!==inputArray.length-1){
            return arr.push(Math.abs(val-inputArray[i+1]));
        }
    });
        
    return arr.sort(function(a,b){
        return b-a;
    })[0];
}
