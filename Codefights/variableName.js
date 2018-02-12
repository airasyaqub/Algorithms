/*Correct variable names consist only of Latin letters, digits and underscores 
and they can't start with a digit.
Check if the given string is a correct variable name.*/


function variableName(name) {
//var exp=/^[a-zA-Z_]\w*$/g;
 return /^[a-zA-Z_]\w*$/g.test(name);
}
