// https://leetcode.com/problems/longest-common-prefix/

let longestCommonPrefix = function (strs) {
  if (strs[0] == "") {
    return "";
  }
  if (strs.length == 1) {
    return strs[0];
  }

  let res = "";
  let i = 0;
  let flag = true;

  while (flag) {
    strs.forEach((item) => {
      if (i != item.length) {
        if (strs[0][i] != item[i]) {
          flag = false;
        }
      } else {
        flag = false;
      }
    });
    if (flag) {
      res = res + strs[0][i];
    }
    i++;
  }
  return res;
};
