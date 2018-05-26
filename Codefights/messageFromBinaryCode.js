/*You are taking part in an Escape Room challenge designed specifically for programmers. 
In your efforts to find a clue, you've found a binary code written on the wall behind a vase, 
and realized that it must be an encrypted message. 
After some thought, your first guess is that each consecutive 8 bits of the code stand for the 
character with the corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message.

Example

For code = "010010000110010101101100011011000110111100100001", the output should be
messageFromBinaryCode(code) = "Hello!".*/

function messageFromBinaryCode(code) {
    var str=[];
    var num=[];
    var arr=code.match(/[01]{1,8}/g);
    arr.forEach(e=>num.push(e[0]*128+e[1]*64+e[2]*32+e[3]*16+e[4]*8+e[5]*4+e[6]*2+e[7]*1));
    num.forEach(e=>str.push(String.fromCharCode(e)));
    return str.join('');
}