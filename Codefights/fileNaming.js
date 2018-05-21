/*You are given an array of desired filenames in the order of their creation. 
Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), 
where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

Example

For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].*/

function fileNaming(names) {
    var elem=names[0];
    var equalNames;
    var arr=names;
    for(var i=0;i<names.length;i++){
        var k=0;
        equalNames=false;
        check(names[i],i);
        if(equalNames){
           names.splice(i,1,elem);
        }
    }
    
    function nameChange(value){
        return arr[value]+"("+k+")";
    }
    
    function check(elemarg,index){
            for(var j=0;j<index;j++){    
            if(elemarg===names[j]){
                equalNames=true;
                k++;
                elem=nameChange(index);
                check(elem,index);
            }
        }
    }
    
    return names;
}



/*function fileNaming(names) {
    var elem=names[0];
    var flag;
    var arr=names;
    for(var i=0;i<names.length;i++){
        var k=0;
        flag=0;
        var val=i;
        check(names[i],val);
         //console.log("gotta splice");
        if(flag===1){
           names.splice(i,1,elem);
        }
       
    }
    
    function nameChange(inc,elem1,value){
        return arr[value]+"("+k+")";
    }
    
    function check(elemarg,valarg){
        //console.log("chk entered")
            for(var j=0;j<valarg;j++){
            //console.log(names)
            //console.log(elemarg,names[j],j,k,valarg)
            if(elemarg===names[j]){
                flag=1;
                //console.log("if entered")
                elem=nameChange(k++,elemarg,valarg)
                //console.log(elem);
                check(elem,valarg);
            }
        }
    }
    return names;
}*/
