// https://leetcode.com/problems/roman-to-integer/

let romanToInt = function (s) {
    let dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let num = 0
    let res = 0
    let flag = true;

    s.split("").forEach((item, index, arr) => {
        console.log(item)
        if (flag) {
            if (item == "I") {
                if (arr[index + 1] == "V") {
                    num = 4;
                    flag = false;
                } else if (arr[index + 1] == "X") {
                    num = 9;
                    flag = false;
                } else {
                    num = dict[item];
                }
            } else if (item == "X") {
                if (arr[index + 1] == "L") {
                    num = 40;
                    flag = false;
                } else if (arr[index + 1] == "C") {
                    num = 90;
                    flag = false;
                } else {
                    num = dict[item];
                }
            } else if (item == "C") {
                if (arr[index + 1] == "D") {
                    num = 400;
                    flag = false;
                } else if (arr[index + 1] == "M") {
                    num = 900;
                    flag = false;
                } else {
                    num = dict[item];
                }
            } else {
                num = dict[item]
            }
            console.log(num)
            res += num;
        } else {
            flag = true;
        }

    });
    return res
};