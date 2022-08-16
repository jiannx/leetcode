/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */
// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < (nums.length - 1); i++) {
    const v = target - nums[i];
    if(map[v] !== undefined && map[v] !== i) {
      return [i, map[v]]
    }
  }
  return [];
};
// @lc code=end

