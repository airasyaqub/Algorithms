/*Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, 
starting from top-left and in clockwise direction.

Example

For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]*/

 function spiralNumbers(n) {
    var last=n*n;
    var res=[];
    var lastadded=0;
    var movement="right";
    var spiral=1;
    for(var i=0;i<n;i++){
        res.push([]);
    }
    generarr(1,n,movement,spiral,0);
    
function generarr(st,end,move,spiral,arrayPosition){
   var pos=spiral;
    if(move=="down"){
        arrayPosition=spiral;
    }
   if(lastadded==last){
     return;
    }
    else{
        for(var i=st;i<=end;i++){
            if(move=="right"){
               res[spiral-1].splice(pos-1,0,i);
               pos++;
               }
            if(move=="down"){
                res[arrayPosition].splice(-spiral+1,0,i);
                arrayPosition++;
               }
            if(move=="left"){
               res[arrayPosition-1].splice(spiral-1,0,i);
               }
            if(move=="up"){
               arrayPosition=arrayPosition-1;
               res[arrayPosition].splice(spiral-1,0,i);
               }
            lastadded=i;
        }
    }
        if(move=="right"){
            generarr(i,i+(end-st-1),"down",spiral,0);
        }
        if(move=="down"){
            generarr(i,i+(end-st),"left",spiral,arrayPosition);
        }
        if(move=="left"){
            generarr(i,i+(end-st-1),"up",spiral,arrayPosition-1);
        }
        if(move=="up"){
            generarr(i,i+(end-st),"right",spiral+1,0);
        }
          
    }
    return res;
}