/*Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.*/



/*function sumFibs(num) {
  var arr=[1,1];
  var sum=0;
  var i=0;
  while(sum<=num){
    sum=arr[i]+arr[i+1];
    if(sum<=num){
    arr.push(sum);
    }
    i++;
  }
  return arr.filter(function(i){return i%2;}).reduce(function(a,b){return a+b;});
}

console.log(sumFibs(10));*/
function sumFibs(num) {
  var arr=[1,1];
  var sum=0;
  var i=0;
  while(sum<=num){
    sum=arr[i]+arr[i+1];
    if(sum<=num){
    arr.push(sum);
    }
    i++;
  }
  return arr.reduce(function(total,value){
     if(value%2!==0){
       return total+value;
     }
    else{
      return total;
    }
   });
}

console.log(sumFibs(10));