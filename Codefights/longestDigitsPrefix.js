/*Given a string, output its longest prefix which contains only digits.

Example

For inputString="123aa1", the output should be
longestDigitsPrefix(inputString) = "123".*/

function longestDigitsPrefix(str) {
    if(/^\d+/g.exec(str)){
        return /^\d+/g.exec(str)[0];
    }
    else{
        return '';
    }
}

//--------------------------------------------------------------------------

function longestDigitsPrefix(inputString) {
    return inputString.match(/^\d*/)[0];
}

