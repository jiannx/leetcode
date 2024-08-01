/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let length: number = s.length;
  let left: number = 0,
    right: number = length - 1;
  let tempStr: string;
  while (left < right) {
    tempStr = s[left];
    s[left] = s[right];
    s[right] = tempStr;
    left++;
    right--;
  }
};
// @lc code=end

