/*Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.*/

function areSimilar(a, b) {
    var replacedarr=[];
    var ind=[];
    a.forEach(function(val,i){
        if(val!==b[i]){
            replacedarr.push(val);
            ind.push(i);
        }
    });
    console.log(replacedarr);
    if(replacedarr.length==0&&a.length>0){
        return true;
    }
    
    if(replacedarr.length>2){
        return false;
    }
    
    replacedarr.reverse();
    a.splice(ind[0],1,replacedarr[0]);
    a.splice(ind[1],1,replacedarr[1]);
    //console.log(a);
    var check=0;
    a.forEach(function(val,i){
        //console.log(val,b[i],i)
        if(val!==b[i]){
            check=1;
        }
    });
    
    if(check==0){
        return true;
    }
    else if(check==1){
         return false;            
            } 
}
 