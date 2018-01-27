/*You are given an array of integers representing coordinates of obstacles situated on a straight line.
Assume that you are jumping from the point with coordinate 0 to the right. 
You are allowed only to make jumps of the same length represented by some integer.
Find the minimal length of the jump enough to avoid all the obstacles.
Example
For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.*/

function avoidObstacles(inputArray) {
    
    var max=Math.max(...inputArray);
    var v;
    var arr=[];
    inputArray.sort(function(a,b){
       return b-a; 
    });
    
    for(var i=0;i<=inputArray[0]+1;i++){
        arr.push(i);
    }
    
    arr=arr.filter(function(val){
        return inputArray.indexOf(val)==-1;
    });
    
    for(var j=1;j<arr.length;j++){
        for(var k=j;k<arr.length;k=v+k){
             v=arr.indexOf(arr[j]+arr[k]);
             v=v-k;
             if(arr[j]+arr[k]>max){
                 return arr[j];
             }
            if(inputArray.indexOf(arr[j]+arr[k])==-1){
               
                if(k<arr.length-1){
                continue;
                }
                //return arr[j];
            }
            else{
                break;
            }
        }
    }
    

}
