/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  let res = [];
  for (let i = 0; i < temperatures.length; i++) {
    let index = 0;
    while (temperatures[i + index + 1] <= temperatures[i] && (index + i) < temperatures.length) {
      index++;
    }
    if ((index + i) === temperatures.length - 1) {
      index = 0;
    } else {
      index++;
    }
    res[i] = index;
  }
  return res;
};
// @lc code=end

