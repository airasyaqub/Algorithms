/*Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:*/

function differentSquares(matrix) {
 
 if(matrix.length==1||matrix[0].length==1){
  return 0;
 }
 var mat=[];
 for(var i=0;i<matrix.length-1;i++){
  for(var j=0;j<matrix[i].length-1;j++){
   var ent=[];
   ent.push(matrix[i][j],matrix[i][j+1],matrix[i+1][j],matrix[i+1][j+1]);
   mat.push(ent);
  }
 }
 var arr=[];
 for(var i=0;i<mat.length;i++){
  for(var j=i+1;j<mat.length;j++){
    if(mat[i][0]==mat[j][0]&&mat[i][1]==mat[j][1]&&mat[i][2]==mat[j][2]&&mat[i][3]==mat[j][3]){
     arr.push(mat[i]);
     break;
    } 
  }
 }
 return mat.length-arr.length;
}

//------------------------------------------------------------------------------

function differentSquares(matrix) {
 
 if(matrix.length==1||matrix[0].length==1){
  return 0;
 }
 var mat=[];
 for(var i=0;i<matrix.length-1;i++){
  for(var j=0;j<matrix[i].length-1;j++){
   var ent=[];
   ent.push(matrix[i][j],matrix[i][j+1],matrix[i+1][j],matrix[i+1][j+1]);
   mat.push(ent);
  }
 }
 var arr=[];
 for(var i=0;i<mat.length;i++){
  for(var j=i+1;j<mat.length;j++){
    if(mat[i][0]==mat[j][0]&&mat[i][1]==mat[j][1]&&mat[i][2]==mat[j][2]&&mat[i][3]==mat[j][3]){
     arr.push(j);
    } 
  }
 }
 var res=mat.filter(function(elem,i){
    return arr.indexOf(i)==-1;
 });
 return res.length;

}

//----------------------------------------------------------------------

