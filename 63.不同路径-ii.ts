/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  if (m <= 1 && n <= 1) {
    return obstacleGrid[0][0] === 0 ? 1 : 0;
  }
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  let dp = new Array(m).fill(1).map(x => {
    return new Array(n).fill(1);
  });
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0) {
      dp[i][0] = 0;
    }
  }
  for (let j = 1; j < n; j++) {
    if (obstacleGrid[0][j] === 1 || dp[0][j - 1] === 0) {
      dp[0][j] = 0;
    }
  }
  console.log('1', dp);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  console.log('2', dp)
  return dp[m - 1][n - 1];
};
// @lc code=end

