/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(numbers: number[]): number[][] {
  let res = [];
  function dfs(arr, nums) {
    if (arr.length === numbers.length) {
      res.push(arr);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      let other = [...nums];
      dfs([
        ...arr,
        other.splice(i, 1)[0]
      ], other);
    }
  }
  dfs([], numbers);
  return res;
};
// @lc code=end

