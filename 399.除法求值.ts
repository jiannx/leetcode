/*
 * @lc app=leetcode.cn id=399 lang=typescript
 *
 * [399] 除法求值
 */

// @lc code=start
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  let maps = {};
  equations.forEach((v, index) => {
    if (!maps[v[0]]) {
      maps[v[0]] = {};
    }
    maps[v[0]][v[1]] = values[index];
    if (!maps[v[1]]) {
      maps[v[1]] = {};
    }
    maps[v[1]][v[0]] = 1 / values[index];
  });
  console.log(maps);
  let res = [];
  for (let x of queries) {
    let qa = x[0];
    let qb = x[1];
    if (!maps[qa] || !maps[qb]) {
      res.push(-1);
    } else if (qa === qb) {
      res.push(1);
    } else {
      let stack = [];
      stack.push(qa);
      let used = {
        [qa]: 1
      };
      while (stack.length > 0 && used[qb] === undefined) {
        let key = stack.pop();
        let nextKeys = Object.keys(maps[key]);
        for (let k of nextKeys) {
          if (used[k] === undefined) {
            used[k] = maps[key][k] * used[key];
            stack.push(k);
          }
        }
      }
      res.push(used[qb] || -1)
    }
  }

  return res;
};
// @lc code=end

