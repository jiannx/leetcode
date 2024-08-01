/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  // 生成最长的相同前后缀表 next[i] = 不包含当前字符的前后缀相同串长度
  function getNext(str: string): number[] {
    let next: number[] = [];
    let j: number = 0;
    next[0] = j;
    for (let i = 1, length = str.length; i < length; i++) {
      while (j > 0 && str[i] !== str[j]) {
        j = next[j - 1];
      }
      if (str[i] === str[j]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  }

  const next = getNext(needle);
  console.log(next)
  let nextIndex = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (nextIndex > 0 && haystack[i] !== needle[nextIndex]) {
      nextIndex = next[nextIndex - 1];
    }
    if (haystack[i] === needle[nextIndex]) {
      if (nextIndex === (needle.length - 1)) {
        return i - nextIndex;
      }
      nextIndex++;
    }
  }
  return -1;
};
// @lc code=end

