/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// https://leetcode.cn/problems/next-permutation/solution/jie-fa-hen-jian-dan-jie-shi-qi-lai-zen-yao-jiu-na-/ 
function nextPermutation(nums: number[]): void {
  // 取第一个左边比右边小的数
  let i = nums.length - 2;
  while (nums[i] >= nums[i + 1] && i >= 0) {
    i--;
  }
  if (i === -1) {
    nums.reverse();
    return;
  }
  console.log(i)

  // 取i右边比num[i]大一点点的数，进行换位
  let j = i + 1;
  let min = nums[j];
  let minIndex = j;
  while (j < nums.length) {
    if (nums[j] > nums[i] && nums[j] < min) {
      min = nums[j];
      minIndex = j;
    }
    j++;
  }
  console.log(minIndex)
  let temp = nums[i];
  nums[i] = nums[minIndex];
  nums[minIndex] = temp;

  let rightMin = nums.splice(i + 1, nums.length);
  rightMin.sort((a, b) => a - b);
  console.log(rightMin)
  nums.push(...rightMin);
};
// @lc code=end

