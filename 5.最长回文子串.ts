/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start

function getReverseStr(s) {
  return s.split('').reverse().join('');
}
function longestPalindrome(s) {
  
  //dp[i]=字符串0到i的最长回文字符串长度
  let dp = new Array(s.length).fill(0);
  let max = s[0];
  dp[0] = 1;
  let str = s[0];
  for (let i = 1; i < s.length; i++) {
    dp[i] = 
  }

  return max;
};

function longestPalindrome2(s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }

  function helper(i, k) {
    while (i >= 0 && k < s.length && s[i] === s[k]) {
      i--;
      k++;
    }
    // while多执行了一次
    const str = s.slice(i + 1, k - 1 + 1);
    if (str.length > max.length) {
      max = str;
    }
  }

  return max;
};
// @lc code=end

