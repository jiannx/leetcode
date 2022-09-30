/*
 * @lc app=leetcode.cn id=611 lang=typescript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = 0;
  for (let i = 2; i < n; i++) {
    let left = 0;
    let right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        res += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
  // 作者：ityou-o
  // 链接：https://leetcode.cn/problems/valid-triangle-number/solution/javascriptban-jie-ti-si-lu-by-ityou-o-n7pw/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};
// @lc code=end

