/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  let chars = word.split('');
  let startPoints = [];

  // 查找第一个符合的字符
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === chars[0]) {
        startPoints.push([i, j]);
      }
    }
  }

  let isExist = false;

  function dep(point, index, used) {
    if (!chars[index]) {
      isExist = true;
    } else {
      let cases = [[-1, 0], [1, 0], [0, -1], [0, +1]];
      cases.forEach(c => {
        // console.log(c)
        let x = point[0] + c[0];
        let y = point[1] + c[1];
        if (
          x < 0 || y < 0 || 
          x > board.length - 1 || y > board[0].length - 1 ||
          used[`${x}+${y}`]
          ) {
          return;
        }
        if (board[x][y] === chars[index]) {
          dep([x, y], index + 1, { ...used, [`${x}+${y}`]: true });
        }
      });
    }
  }

  for (let origin of startPoints) {
    dep(origin, 1, { [`${origin[0]}+${origin[1]}`]: true });
  }

  return isExist;
};
// @lc code=end

