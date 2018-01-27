/*An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network 
that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. 
One of them is the IPv4 address.
IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, 
each ranging from 0 to 255 inclusive, separated by dots, e.g., 172.16.254.1.
Given a string, find out if it satisfies the IPv4 address naming rules*/

function isIPv4Address(input) {
    var retval=true;
    regex=/^\d{1,3}\.\d{1,3}.\d{1,3}.\d{1,3}$/;
    if(!regex.test(input)){
        return false;
    }
    
    else{
        
        var arr=input.split('.');
        arr.forEach(function(val){
             var num=Number(val);
            if(num>255||num<0){
                retval=false;
            }
            
        });
        
        
    }
    
    return retval; 
}
