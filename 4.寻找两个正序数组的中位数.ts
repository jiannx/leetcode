/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let index1 = 0;
  let index2 = 0;
  let newNums: number[] = [];
  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[0] < nums2[0]) {
      newNums.push(nums1.shift());
    } else {
      newNums.push(nums2.shift())
    }
  }
  newNums = newNums.concat(nums1);
  newNums = newNums.concat(nums2);
  console.log(newNums, index1, index2)
  const length = newNums.length;
  if (length % 2 === 1) {
    return newNums[Math.floor(length / 2)];
  } else {
    return (newNums[length / 2] + newNums[length / 2 - 1]) / 2;
  }
};
// @lc code=end

