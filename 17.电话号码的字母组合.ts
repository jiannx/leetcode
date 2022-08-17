/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  let numMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  let chars = digits.split('');
  let arr = chars.map(c => numMap[c]);
  let res = arr[0] || [];
  for (let i = 1; i < arr.length; i++) {
    let newRes = [];
    for (let c of res) {
      arr[i].forEach(v => {
        newRes.push(c + v);
      });
    }
    res = newRes;
  }
  return res;
};
// @lc code=end

