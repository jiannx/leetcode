/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let stack: string[] = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  let isOk = true;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let lastChar = stack.pop();
      if (map[lastChar] !== s[i]) {
        isOk = false;
        continue;
      }
    }
  }
  if(stack.length > 0) {
    return false;
  }
  return isOk;
};
// @lc code=end

