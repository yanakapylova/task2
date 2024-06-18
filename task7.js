// https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
    let past = []
    return nums.find((item) => {
        if (!past.includes(item)) {
            let count = nums.filter((elem) => elem === item).length;
            past.push(item)
            return count > (nums.length / 2)
        } 
    });
};
