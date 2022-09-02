/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
// https://leetcode.cn/problems/product-of-array-except-self/solution/cheng-ji-dang-qian-shu-zuo-bian-de-cheng-ji-dang-q/
function productExceptSelf(nums: number[]): number[] {
  let res = [nums[0], nums[0] * nums[1]];
  let k = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = k;
    k = k * nums[i];
  }
  k = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * k;
    k = k * nums[i];
  }
  return res;
};
// @lc code=end

