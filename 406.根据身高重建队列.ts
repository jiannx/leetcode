/*
 * @lc app=leetcode.cn id=406 lang=typescript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
function reconstructQueue(people: number[][]): number[][] {
  // 按身高降序，按人数升序
  people.sort((a, b) => {
    return a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1];
  });
  console.log(people);

  let res = [];
  people.forEach(item => {
    res.splice(item[1], 0, item);
  });
  return res;
};
// @lc code=end

