/*Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. 
If there is no such integer, return -1 instead.
Example
For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.*/

function digitsProduct(product) {
    if(product===0) return 10;
    if(product===1) return 1;
    let factors=[];
    for(let factor=9;factor>1;factor--){
        while(product%factor==0){
            factors.push(factor);
            product /= factor;
        }
    }
 if(product>1) return -1;
 return parseInt(factors.reverse().join(""));
}

