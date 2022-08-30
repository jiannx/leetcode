/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
const findKthLargest = (nums, k) => {

  function quick(arr, left, right) {
    if (left >= right) {
      return;
    }
    let mid = partition(arr, left, right);
    quick(arr, left, mid - 1);
    quick(arr, mid + 1, right);
  }

  function partition(arr, left, right) {
    let pivot = left;
    let index = left + 1;
    for (let i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
        swap(arr, i, index);
        index++;
      }
    }
    swap(arr, index - 1, pivot);
    return index - 1;
  }

  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  quick(nums, 0, nums.length - 1);
  // console.log(nums);
  return nums[nums.length - k];
};
