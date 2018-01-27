/*Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. 
He may need some additional statues to be able to accomplish that. 
Help him figure out the minimum number of additional statues needed.*/

function makeArrayConsecutive2(statues) {
    statues.sort(function(a,b){
        return a-b;
    });
    var arr=[];
    var j=0;
    for(var i=statues[j];i<=statues[statues.length-1];i++){
        arr.push(i);
    }
    
    var diff=arr.length-statues.length;
    return diff;

}
 makeArrayConsecutive2([6,2,3,8]);

