/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
function countSubstrings(s: string): number {
  let length = s.length;
  // dp[i][j]为s[i]-s[j]是否为回文串
  let dp = new Array(length).fill(0).map(() => new Array(length).fill(0));
  let res = 0;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = i; j < length; j++) {
      if (s[i] === s[j] && (j - i <= 2)) {
        dp[i][j] = 1;
      } else if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = 0;
      }
      res += dp[i][j];
    }
  }
  return res;
};
// @lc code=end

