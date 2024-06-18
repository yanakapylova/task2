// https://leetcode.com/problems/palindrome-number/


var isPalindrome = function(x) {
    return +String(x).split("").reverse().join("") == x
};