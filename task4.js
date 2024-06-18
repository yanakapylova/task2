// https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
    let i = digits.length - 1
    function wrap() {
        digits[i] = digits[i] + 1
        if (i == -1) {
            digits.unshift(1)
            i = 0
        }
        if (digits[i] == 10) {
            digits[i] = 0
            i--
            wrap()
        }
    }
    wrap()
    return digits
};