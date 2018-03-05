/*Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


Example

For bishop = "a1" and pawn = "c3", the output should be
bishopAndPawn(bishop, pawn) = true.*/

//-----------------------------------------------------------------------------

function bishopAndPawn(bishop, pawn) {
   var arr=bishop.split('');
   var codealpha=arr[0].charCodeAt(0);
   var codenum=parseInt(arr[1]);
   var res;
  while(codenum<=8&&codealpha<=104){
   codealpha++;
   codenum++;
   var str=String.fromCharCode(codealpha);
   var chkalpha=str+codenum;
   if(chkalpha===pawn){
    return true;
   }
  }
   codealpha=arr[0].charCodeAt(0);
   codenum=parseInt(arr[1]);
  while(codenum<=8&&codealpha<=104&&codealpha>=97){
   codealpha--;
   codenum++;
   var str=String.fromCharCode(codealpha);
   var chkalpha=str+codenum;
   if(chkalpha===pawn){
    return true;
   }
  }
 
   codealpha=arr[0].charCodeAt(0);
   codenum=parseInt(arr[1]);
  while(codenum<=8&&codenum>=1&&codealpha<=104){
   codealpha++;
   codenum--;
   var str=String.fromCharCode(codealpha);
   var chkalpha=str+codenum;
   if(chkalpha===pawn){
    return true;
   }
  }
 
  codealpha=arr[0].charCodeAt(0);
  codenum=parseInt(arr[1]);
  while(codenum<=8&&codenum>=1&&codealpha<=104&&codealpha>=97){
   codealpha--;
   codenum--;
   var str=String.fromCharCode(codealpha);
   var chkalpha=str+codenum;
   if(chkalpha===pawn){
    return true;
   }
  }
 
 return false;
 
}
//-----------------------------------------------------------------------------------------------------
function bishopAndPawn(bishop, pawn) {
  return Math.abs(bishop[0].charCodeAt()-pawn[0].charCodeAt())===Math.abs(bishop[1]-pawn[1])
}
