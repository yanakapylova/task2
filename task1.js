// https://leetcode.com/problems/palindrome-number/


let isPalindrome = function(x) {
    return +String(x).split("").reverse().join("") == x
};