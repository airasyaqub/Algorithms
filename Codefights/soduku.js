/*Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, 
each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example
For the first example below, the output should be true. For the other grid, the output should be false:
 each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.*/

 function sudoku(grid) {
    var res=true;
    var subgrids=[];
    extractGrids(0,2,0,2);
    
    function extractGrids(start,end,innerStart,innerEnd){
        var arr=[];
        for(var i=start;i<=end;i++){
            for(var j=innerStart;j<=innerEnd;j++){
                arr.push(grid[i][j]);
            }
        }
        subgrids.push(arr);
        if(i==9&&j==9) return 0;
        if(j==9) extractGrids(start+3,end+3,0,2);
        else extractGrids(start,end,innerStart+3,innerEnd+3);
        }
    
    for(var i=0;i<9;i++){
        var sum=[grid[0][i],grid[1][i],grid[2][i],grid[3][i],grid[4][i],grid[5][i],grid[6][i],grid[7][i],grid[8][i]].reduce(function(a,b){
           return a+b; 
        });
    if(sum!==45) res=false;
    }
    
   grid.forEach(function(elem){
       var sum= elem.reduce(function(a,b){
          return a+b; 
       });
       if(sum!==45) res=false;
     });
    
    subgrids.forEach(function(elem){
       elem.forEach(function(elem1,i){
           if(elem.indexOf(elem1)!==i) res=false;
       }); 
    });
    return res;
}