/*Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically 
and one square horizontally away from it. The complete move therefore looks like the letter L.
 Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
 For cell = "a1", the output should be
chessKnight(cell) = 2.*/

function chessKnight(cell) {
    let valid=0;
    let alph=cell.charCodeAt(0);
    let num=parseInt(cell[1]);
        if(num+2<9&&alph+1<105){
            valid++;
        }
        if(num+2<9&&alph-1>=97){
            valid++;
        }
        if(num-2>0&&alph+1<105){
            valid++;
        }
        if(num-2>0&&alph-1>=97){
            valid++;
        }
    
        if(num+1<9&&alph+2<105){
            valid++;
        }
        if(num-1>0&&alph+2<105){
            valid++;
        }
        if(num+1<9&&alph-2>=97){
            valid++;
        }
        if(num-1>0&&alph-2>=97){
            valid++;
        }
    return valid;
}

