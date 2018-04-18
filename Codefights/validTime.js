/*Check if the given string is a correct time representation of the 24-hour clock.
Example
For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.*/

function validTime(time) {
    var hr=parseInt(time.substring(0,2)); var min=parseInt(time.substring(3));
    if(hr>=0&&hr<=23&&min>=0&&min<=59) return true;
    else return false;
}