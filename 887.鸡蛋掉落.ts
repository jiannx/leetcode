/*
 * @lc app=leetcode.cn id=887 lang=typescript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
let superEggDrop = (K, N)=> {
  let dp = Array(K+1).fill(0)
  let cnt = 0
  while (dp[K] < N){
      cnt++
      for (let i=K; i>0; i--){
          dp[i] = dp[i-1] + dp[i] + 1
      }
  }
  return cnt
};
// 作者：ofeii
// 链接：https://leetcode.cn/problems/super-egg-drop/solution/chun-zhao-si-yue-ep11supereggdropji-dan-diao-luo-j/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// var superEggDrop = function(k, n) {
//   const memo = new Map();
//   function dp (k, n) {
//       if (k === 1) return n; // 当k为1时，只能线性扫描所有楼层
//       if (n === 0) return 0;
//       if (memo.has(k + '' + n)) {
//           return memo.get(k + '' + n)
//       }
//       let res = Infinity;
//       for (let i = 1; i <= n; i++) {
//           res = Math.min(
//               res,
//               Math.max(
//                   dp(k, n - i),
//                   dp(k - 1, i - 1)
//               ) + 1
//           )
//       }
//       memo.set(k + '' + n, res)
//       return res;
//   }
//   return dp(k, n)
// };
// @lc code=end

