/*Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.*/

/*class Person {
  
  constructor(first,last,full) {
    this._first = first;
    this._last= last;
    this._full=full;
    
  }
  
  set first(frst){
    this._first=frst;
  }
  
  get first(){
  return this._first;
}

set last(lst){
    this._last=lst;
  }
  
  get last(){
  return this._last;
}

set full(fll){
    this._full=fll;
  }
  
  get full(){
  return this._full;
}

}

   
var bob = new Person('Bob','Ross','Bob Ross');
bob.first;
bob.first='Airas';
bob.last;
bob.last='Yaqub';*/
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  var arr=firstAndLast.split(" ");
  var first=arr[0];
   var last=arr[1];
  var fullname= first+" "+last;
  
  
  this.setFullName=function(fulln){
    var arr1=fulln.split(" ");
    first=arr1[0];
    last=arr1[1];
    //fullname=first+" "+last;
    };
  
    this.getFullName = function() {
      return first+" "+last;
    };
    
  this.setFirstName=function(frst){
      first=frst;
    };
  this.getFirstName=function(){
      return first;
    };
  
  this.setLastName=function(lst){
      last=lst;
    };
  this.getLastName=function(){
      return last;
    };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();