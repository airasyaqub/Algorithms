/*Given a string, find the shortest possible string which can be achieved 
by adding characters to the end of initial string to make it a palindrome.

Example
For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".*/


function buildPalindrome(st) {
    function chkpalindrome(chkst){
        var compst=chkst.split('').reverse().join('');
        if(compst===chkst){
                return true;
            }   
        }
    
    if(chkpalindrome(st)){
        return st;
    }
    
    var arr= st.split('');
    var num=st.length;
    for(var i=0;i<=arr.length-2;i++){
        if(i==0){st=st+arr[i];}
        else{
            st=st.split('');
            st.splice(num,0,arr[i]);
            st=st.join('');
        }
        if(chkpalindrome(st)){break;}
    }
    return st;
}



/*function buildPalindrome(st) {
    function chkpalindrome(chkst){
        var compst=chkst.split('').reverse().join('');
        if(compst===chkst){
                return true;
            }   
        }
    
    if(chkpalindrome(st)){
        return st;
    }
    
    if(st.length==3){
       // return st+st[3-2]+st[3-3];
        if(chkpalindrome(st+st[3-3])){
          return st+st[3-3];
        }
        else{
            return st+st[3-2]+st[3-3];
        }
    }
    
    var arr= st.split('');
    var mid=Math.floor(arr.length/2);
    for(var i=mid-1;i>=0;i--){
        st=st+arr[i];
        if(chkpalindrome(st)){break;}
    }
    return st;
}*/
