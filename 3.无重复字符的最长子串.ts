/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let noRepeatStr = [];
  let length = 0;
  s.split('').forEach(key => {
    const index = noRepeatStr.findIndex(k => k === key);
    if (index >= 0) {
      length = noRepeatStr.length > length ? noRepeatStr.length : length;
      noRepeatStr.splice(0, index + 1);
    }
    noRepeatStr.push(key);
  });
  length = noRepeatStr.length > length ? noRepeatStr.length : length;
  return length;
};
// @lc code=end

