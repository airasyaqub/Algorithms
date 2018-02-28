/*Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of 
its digits until we get to a one digit number.
Given an integer, find its digit degree.
Example
For n = 5, the output should be
digitDegree(n) = 0;
For n = 100, the output should be
digitDegree(n) = 1.
1 + 0 + 0 = 1.
For n = 91, the output should be
digitDegree(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.*/

function digitDegree(n) {
    var res=0;
    return countDeg(n);
    function countDeg(n){
        var str=n+'';
        var arr=str.split('');
    if(arr.length==1){
        return res;
    }
    
    else{
        res++;
        n=arr.reduce(function(a,b){
            return parseInt(a)+parseInt(b);
        });
        return countDeg(n);
        }
    }
}
