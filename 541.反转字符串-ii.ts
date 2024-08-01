/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  let left: number, right: number;
  let arr: string[] = s.split('');
  let temp: string;
  for (let i = 0, length = arr.length; i < length; i += 2 * k) {
    left = i;
    right = (i + k - 1) >= length ? length - 1 : i + k - 1;
    while (left < right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr.join('');
};
// @lc code=end

