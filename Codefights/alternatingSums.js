/*Several people are standing in a row and need to be divided into two teams. 
The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
You are given an array of positive integers - the weights of the people. 
Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 
after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].*/

function alternatingSums(a) {
    
    if(a.length==1){
        return [a[0],0];
    }
    else{
    var arr1=[];
    var arr2=[];
    var mainarray=[];
    
    a.forEach(function(val,i){
        if((i+1)%2==0){
            
            arr2.push(val);
        }
        else {
            arr1.push(val);
        }
        
    });
    
     var teamA=arr1.reduce(function(a,b){
        return a+b; 
     });
    
    var teamB=arr2.reduce(function(a,b){
        return a+b; 
     });
    
    mainarray.push(teamA,teamB);
    
    return mainarray;
        
    }
    
    

}


alternatingSums([50, 60, 60, 45, 70]);