/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let helperArr: number[] = new Array(26).fill(0);
  let pivot: number = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    helperArr[s.charCodeAt(i) - pivot]++;
    helperArr[t.charCodeAt(i) - pivot]--;
  }
  return helperArr.every(i => i === 0);
};
// @lc code=end

