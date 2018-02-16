/*You have deposited a specific amount of dollars into your bank account. 
Each year your balance increases at the same growth rate. 
Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.
Example
For deposit = 100, rate = 20 and threshold = 170, the output should be
depositProfit(deposit, rate, threshold) = 3.*/

function depositProfit(deposit, rate, threshold) {
        let years=0;
        while(deposit<threshold){
                deposit=deposit+(deposit*rate/100);
                years++;
        }
       return years;
}
