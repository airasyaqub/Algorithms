/*Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.*/

function chessBoardCellColor(cell1, cell2) {  
    var obj={};
    for(var i=1;i<9;i++){
        var num=i+'',code=65;
        for(var j=1;j<9;j++){
          var letter=String.fromCharCode(code),prop= letter+num;
          if(i%2!==0&&j%2!==0){
              obj[prop]='bro';
          }
            else if(i%2!==0&&j%2==0){
                obj[prop]='yel';
            }
            else if(i%2==0&&j%2!==0){
                obj[prop]='yel';
            }
            else if(i%2==0&&j%2==0){
                obj[prop]='bro';
            }
          code++;
        }        
    }
  return obj[cell1]==obj[cell2];    
}