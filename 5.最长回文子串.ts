/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start

function longestPalindrome(s) {
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

