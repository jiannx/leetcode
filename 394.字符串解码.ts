/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  if (s.length === 0) return "";
  let res = "";
  let times = 0; // 用于记录当前的数字
  let numStack = [], // 记录出现过的数字
    strStack = []; // 记录出现过的字符
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c >= '0' && c <= '9') {
      times = times * 10 + Number(c);
    } else if (c === '[') {
      numStack.push(times);
      times = 0;
      strStack.push(res);
      res = '';
    } else if (c === ']') {
      let tmpStr = new Array(numStack.pop()).fill(res).join('');
      res = strStack.pop() + tmpStr;
    } else {
      res += c;
    }
  }
  return res;
};
// @lc code=end

