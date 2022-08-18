/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  let res = [];
  function dfs(arr, others) {
    if (arr.length <= nums.length) {
      res.push(arr);
    }
    for (let i = 0; i < others.length; i++) {
      dfs([...arr, others[i]], others.slice(i + 1, others.length));
    }
  }

  dfs([], nums);

  return res;
};
// @lc code=end

