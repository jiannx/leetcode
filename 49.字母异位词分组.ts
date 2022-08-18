/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  let maps = {};
  for(let i = 0; i< strs.length; i++) {
    let key = strs[i].split('').sort().join('');
    if(!maps[key]) {
      maps[key] = [];
    }
    maps[key].push(strs[i]);
  }
  return Object.values(maps);
};
// @lc code=end

