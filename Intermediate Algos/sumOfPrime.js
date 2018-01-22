/*Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.*/

function sumPrimes(num) {
  var arr=[];
  var sum=0;
  for(var i=2;i<=num;i++){
    arr.push(i);
  }
  var result=[];
  
  for(var j=0;j<arr.length;j++){
    var count=0;
    for(var k=1;k<=arr[j];k++){
      if(arr[j]%k==0){
        count+=1;
        if(count>2){
          break;
        }
      }
    }
    if(count==2){
      result.push(arr[j]);
    }
  }
  
  
  
  return result.reduce(function(total,value){
    return total+value;
  });
}

console.log(sumPrimes(10));