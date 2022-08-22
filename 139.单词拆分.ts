/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  // wordDict.sort((a, b) => b.length - a.length)
  // function deps(s) {
  //   let res = false;
  //   for (let word of wordDict) {
  //     if (word === s) {
  //       return true;
  //     }
  //     if (s.slice(0, word.length) === word) {
  //       res = res || deps(s.slice(word.length, s.lang));
  //     }
  //   }
  //   return res;
  // }
  // return deps(s);


  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] === true && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};
// @lc code=end

