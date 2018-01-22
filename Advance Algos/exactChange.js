/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.*/

var denom = [
  { name: 'PENNY', val: 0.01},
  { name: 'NICKEL', val: 0.05},
  { name: 'DIME', val: 0.10},
  { name: 'QUARTER', val: 0.25},
  { name: 'ONE', val: 1.00},
  { name: 'FIVE', val: 5.00},
  { name: 'TEN', val: 10.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'ONE HUNDRED', val: 100.00}
];


function checkCashRegister(price, cash, cid) {
  var change1=cash-price;
  var change=cash-price;/*Having the change first that needs to be checked
   Here is your change, ma'am.*/
  var cidnum=0;
  for (var i=8;i>=0;i--){/*taking total cash of register in cidnum to be checked*/
    cidnum+=cid[i][1];
  }
  if(cidnum<change){//if cash in drawer is less than change than insufficient funds
    return 'Insufficient Funds';
  }
  else if(cidnum===change){//if cash in drawer is equal to change than closed
    return 'Closed';
  }
  var result=[];// array of result
  for(var j=8;j>=0;j--){//looping through cid array
    var counter=0;
    var rem=cid[j][1];/*rem 'remaining' is to store and check the cash bills which is going to be in result array*/ 
    for(var k=1;k<=cid[j][1]/denom[j].val;k++){/*for example if 60 in TWENTY and in denom object it is 20 so 60/20 will be 3,so 3 times loop is going to run.*/
      change=change-denom[j].val;/*storing change value at every iteration 96.74-20. agr change ma -ve aya to zahri baat hai wo wala dollar bill aur nai dena.*/
      //change.toFixed(2);
      if(cid[j][1]/denom[j].val===1){//what if we have aik 20 bill dollar aur aik 5 bill dollar aur change dena hai 5 bill ka. so phla mera solution nai chal raha tha is case pr.yeh wala if is case ko krna ka liya.**
        counter+=1;
      }
      counter=counter+1;//counter to check:if at very first iteration we get -ve change so counter =1 so we are not going to push any thing as that cid value is invalid.means ka agr phla hi -ve agaya to mtlb loop mai aga jane ki zarurat hi nai aga aur wo wale dollar bills nai dena. 
      rem=rem+denom[j].val;//60+20,80+20,100+20 at every iteratrion of first j iteration.rem ma wo wale dollar bills jo change mai hm de raha hain
      //rem.toFixed(2);
      change = Math.round(change * 100) / 100;
      if(change<0){//if change gets -ve we are not gonna further loop 'k'.jaisa hi -ve agaya mtlb ka aur aga wo wale dollar bill nai dena so loop k sa bhr niklo
        change=change+denom[j].val;//hmain -ve change ana sa phla wali 'change' ki value chahiya hain.
        //change.toFixed(2);
        rem=rem-denom[j].val;//hmain -ve change ana sa phla wali 'rem' ki value chahiya hain.
        //rem.toFixed(2);
        break;
      }
      //console.log("in loop " +rem);
    }
    //console.log(rem);
    if(counter>1){// agr counter 1 sa zyada baar hai to mtlb ka corresponding dollar bill dena hain change mai means ka wo vali cid ki value aur uska corresponding dollars bill jo diya hain wo push krwao
      var arr=[cid[j][0],rem-cid[j][1]];//120-60
      result.push(arr);
    }
  }
  /*if(result.length===0){//agr cash zyada para hai drawer mai lkn wo wale dollar bill nai pare jo change mai chahiya hain to bhi insufficint funds
    return "Insufficient Funds";
  }*/
  
  for(var l=0;l<result.length;l++){//floating point ma values ko lana ka liya
    if(result[l][1]==0){//zero wale bhi push ho raha tha ['TWENTY',0] to yeh unko nikalne ka liya**
      result.splice(l,1);
    }
    result[l].splice(1,1,parseFloat(result[l][1].toFixed(2)));
  }
  //console.log(result);
  var changedue=0;
  for(var m=0;m<result.length;m++){//yeh complex insufficint funds case 7 wale ka liya bcz phla wo ['PENNY',0.01] dikha raha tha jo ghalat hai**
    changedue+=result[m][1];
  }
  //console.log(changedue);
  //parseFloat(changedue.toFixed(2))
  if(parseFloat(changedue.toFixed(2))==change1){//agr jo hmna change dena hai aur jo total change array ka bn raha hai same hai to result o krdo publish**
  return result;
  }
  else{//nai to insufficint funds hain abhi bhi bcz us dollar bill ka note nai hai hmare paas
    return "Insufficient Funds";
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

//console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
checkCashRegister(95.00, 100.00, [["PENNY", 0.00], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 5.00], ["TEN", 0.00], ["TWENTY", 20.00], ["ONE HUNDRED", 0.00]]);
//var num=60;
//console.log(typeof(parseFloat(num.toFixed(2))));
//console.log(parseFloat(num.toFixed(2)));*/
var denom = [
  { name: 'PENNY', val: 0.01},
  { name: 'NICKEL', val: 0.05},
  { name: 'DIME', val: 0.10},
  { name: 'QUARTER', val: 0.25},
  { name: 'ONE', val: 1.00},
  { name: 'FIVE', val: 5.00},
  { name: 'TEN', val: 10.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'ONE HUNDRED', val: 100.00}
];

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function checkCashRegister(price, cash, cid) {
  var change1=cash-price;
  var change=cash-price;
  var cidnum=0;
  for (var i=8;i>=0;i--){/*taking total cash of register in cidnum to be checked*/
    cidnum+=cid[i][1];
  }
  console.log(cidnum);
  console.log(change);
  if(cidnum<change){//if cash in drawer is less than change than insufficient funds
    return 'Insufficient Funds';
  }
  else if(cidnum===change){//if cash in drawer is equal to change than closed
    return 'Closed';
  }
  var result=[];
  for(var j=8;j>=0;j--){
    var counter=0;
    var rem=cid[j][1];
    for(var k=1;k<=cid[j][1]/denom[j].val;k++){
      change=change-denom[j].val;
   if (change<0){
     change=change+denom[j].val;//hmain -ve change ana sa phla wali 'change' ki value chahiya hain.
     break;
   }
      counter++; 
      rem=rem+denom[j].val;//60+20,80+20,100+20 at every iteratrion of first j iteration
      change = Math.round(change * 100) / 100;
    }
    if(counter>0){
      var arr=[cid[j][0],rem-cid[j][1]];//120-60
      result.push(arr);
    }
    
  }
 
  for(var l=0;l<result.length;l++){
    result[l].splice(1,1,parseFloat(result[l][1].toFixed(2)));
  }
  var changedue=0;
  for(var m=0;m<result.length;m++){//yeh complex insufficint funds case 7 wale ka liya
    changedue+=result[m][1];
  }
  if(parseFloat(changedue.toFixed(2))==change1){
  return result;
  }
  else{
    return "Insufficient Funds";
  }
}


console.log(checkCashRegister(50, 100.00, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));