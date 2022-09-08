/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  let sLen = s.length;
  let pLen = p.length;
  let sArr = s.split('');
  let pArr = p.split('');
  let sCount = new Array(26).fill(0);
  let pCount = new Array(26).fill(0);
  let aCode = 'a'.charCodeAt(0);
  if(sLen < pLen) {
    return [];
  }
  pArr.forEach(c => {
    pCount[c.charCodeAt(0) - aCode]++;
  });
  for (let i = 0; i < pLen; i++) {
    sCount[sArr[i].charCodeAt(0) - aCode]++;
  }
  let res = [];
  let index = 0;
  while (index <= (sLen - pLen)) {
    if (sCount.toString() === pCount.toString()) {
      res.push(index);
    }
    sCount[sArr[index++].charCodeAt(0) - aCode]--;
    if (index <= (sLen - pLen)) {
      sCount[sArr[index + pLen - 1].charCodeAt(0) - aCode]++;
    }
  }
  return res;
};
// @lc code=end

