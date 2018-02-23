/*Find the leftmost digit that occurs in a given string.

Example
For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';*/

function firstDigit(inputString) {
    return inputString.match(/\d/)[0];
}