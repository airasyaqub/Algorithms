/*Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, 
so you want to apply the box blur algorithm to the photo to hide its content.
The pixels in the input image are represented as integers. 
The algorithm distorts the input image in the following way: 
Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, 
including x itself. All the pixels on the border of x are then removed.
Return the blurred image as an integer, with the fractions rounded down.
Example

For

image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
the output should be boxBlur(image) = [[1]].

To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. 
The border pixels are cropped from the final result.*/

function boxBlur(image) {
    //console.log(image.length);
    var lastelem= image[0].length-1;
    //var sum=[];
    var result=[];
    values(0,0);
    console.log(result);
  	var realres=[];
    var elem=image[0].length-2;
  	var elem1=elem;
  	for(var k=0;k<result.length;k+=elem){
        var ar=result.slice(k,elem1);
      	realres.push(ar);
      	elem1=elem+elem1;
        }
  console.log(realres);
    function values(i,j){
    var sum=[];
    for(var a=i;a<i+3;a++){
      	//console.log(a);
        for(var b=j;b<j+3;b++){
          	console.log(a,b);
            sum.push(image[a][b]);
          	console.log(sum);
             }
          }
      	console.log(sum);
        sum=sum.reduce(function(a,b){
           return a+b; 
        });
        sum=Math.floor(sum/9);
        result.push(sum);
        if(a===image.length&&b===lastelem+1){
            return;
           }
        if(b==lastelem+1){
            values(i+1,0);
        }
        else{
            values(i,j+1);
        }
    }
  return realres;
}