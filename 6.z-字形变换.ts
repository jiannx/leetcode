/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  let  down = true;
  let  row = 0;
  let  res: any = new Array(numRows).fill([]);
  for (let i = 0; i < s.length; i++) {
    res[row].push(s[i]);
    if (row === 0 || row === numRows - 1) {
      down = !down;
    }
    row += down ? 1 : -1;
  }
  return res.flat().join('');
};
// @lc code=end

