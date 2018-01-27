/*In the popular Minesweeper game you have a board with some mines and those cells 
that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. 
Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]*/

function minesweeper(matrix) {
    
    var result=[];
    for (var i=0;i<matrix.length;i++){
      var minfield=[];
        for(var j=0;j<matrix[i].length;j++){
            var counter=0;
            if(j!==matrix[0].length-1){
               if(matrix[i][j+1]){
                    counter++;
                    }
               }
            if(j!==0){
              if(matrix[i][j-1]){
                    counter++;
                }
            }
           if(i!==0){
             if(matrix[i-1][j]){
                counter++;
               }
              }
          
            if(i!==matrix.length-1){
                if(matrix[i+1][j]){
                     counter++;
                    }
            }
           
            if(i!==0&&j!==0){
               if(matrix[i-1][j-1]){
                counter++;
                } 
            }
            
           if(i!==0&&j!==matrix[0].length-1){
                if(matrix[i-1][j+1]){
                counter++;
               }
            }
            
            if(i!==matrix.length-1&&j!==0){
                 if(matrix[i+1][j-1]){
                   counter++;
                }
            }
           
            if(i!==matrix.length-1&&j!==matrix[0].length-1){
                 if(matrix[i+1][j+1]){
                     counter++;
                  }
            }
           
            
            minfield.push(counter);
            
        }
      result.push(minfield);
    }

  return result;

}














/*function minesweeper(matrix) {
    var result=[];
    for (var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[i].length;j++){
          	console.log(matrix[i][j]);
            var counter=0;
            if(j!==matrix[0].length-1){
               if(matrix[i][j+1]){
                    counter++;
                    }
               }
            if(j!==0){
              if(matrix[i][j-1]){
                    counter++;
                }
            }
           if(i!==0){
             if(matrix[i-1][j]){
                counter++;
               }
              }
          
            if(i!==matrix.length-1){
                if(matrix[i+1][j]){
                     counter++;
                    }
            }
           
            if(i!==0&&j!==0){
               if(matrix[i-1][j-1]){
                counter++;
                } 
            }
          
           if(i!==0&&j!==matrix[0].length-1){
                if(matrix[i-1][j+1]){
                counter++;
               }
            }
            
            if(i!==matrix.length-1&&j!==0){
                 if(matrix[i+1][j-1]){
                   counter++;
                }
            }
           
            if(i!==matrix.length-1&&j!==matrix[0].length-1){
                 if(matrix[i+1][j+1]){
                     counter++;
                  }
            }
           
            
            result.push(counter);
            
        }
    }
  
  	var realres=[];
    var elem=matrix[0].length;
  	var elem1=elem
  	for(var k=0;k<result.length;k+=elem){
        var ar=result.slice(k,elem1);
      	realres.push(ar);
      	elem1=elem+elem1;
        }
  return realres;

}*/