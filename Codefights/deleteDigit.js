/*Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
Example
For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.*/

function deleteDigit(n) {
        var str=""+n;
        var arr=str.split('');
        var max=0;
        arr.forEach(function(elem1,i){
                var num=[];
                arr.forEach(function(elem2,j){
                   if(i!=j){
                        num.push(elem2);   
                   }     
                });
                if(parseInt(num.join(''))>max){
                   max=parseInt(num.join(''));
                }
        });
        return max;
}

