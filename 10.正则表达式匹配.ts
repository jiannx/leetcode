/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {

  let m = s.length + 1;
  let n = p.length + 1;

  // 数据初始化
  let dp = new Array(m).fill(0).map(() => {
    return new Array(n).fill(false);
  });

  // 只有00为匹配
  dp[0][0] = true;

  // 初始化第一行数据，与空字符串匹配
  for (let j = 1; j < n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = j >= 2 ? dp[0][j - 2] : true;
    }
  }

  // console.log(dp)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // console.log(i, j, s[i - 1], p[j - 1])
      // 英文字符相等
      if (s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
      // 点号情况 
      else if (p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      }
      // 星号情况 
      else if (p[j - 1] === '*') {
        // 看*号前面的字符与s的字符是否匹配
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          // 0次匹配，一次匹配，多次匹配
          dp[i][j] = (j >= 2 ? dp[i][j - 2] : true) || dp[i][j - 1] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      } else {
        dp[i][j] = false
      }
    }
  }
  console.log(dp)

  return dp[m - 1][n - 1]
};
// @lc code=end

