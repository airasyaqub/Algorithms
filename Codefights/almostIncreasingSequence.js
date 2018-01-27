/*Given a sequence of integers as an array, 
determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.*/
function almostIncreasingSequence(sequence) {
var j=0;
    var testarr=[];
    for(var i=0;i<sequence.length-1;i++){
        j=i+1;
        if(sequence[i]>=sequence[j]){
            testarr.push(sequence[i]);
        }
    }
    //almostIncreasingSequence(sequence);
    
    if(testarr.length>1){
        return false;
    }
    else{
        return true;
    }
}

almostIncreasingSequence([10,1,2,3,4,5,1]);