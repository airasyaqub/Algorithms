/*Given a sorted array of integers a, find an integer x from a such that the value of
abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.*/

function absoluteValuesSumMinimization(a) {
    var compval,retval,flag=true;
    a.forEach(function(elem){
        var sum=0;
        a.forEach(function(elem1){
           sum=sum+Math.abs(elem1-elem);
        });
        if(flag){flag=false;compval=sum+1;}
        if(sum<compval){ compval=sum; retval=elem;}
    });
    return retval;
}





/*function absoluteValuesSumMinimization(a) {
    var compval=10000000000;
    var retval;
    a.forEach(function(elem){
        var sum=0;
        a.forEach(function(elem1){
           sum=sum+Math.abs(elem1-elem);
        });
        //arr.push(sum);
        if(sum<compval){ compval=sum; retval=elem;}
    });
    return ret;
}*/