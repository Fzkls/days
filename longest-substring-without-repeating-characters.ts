// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let m = 0,
    n = 0
  let map = new Map()
  let maxlen = 0,
    thislen = 1
  while (n < s.length && m < s.length) {
    if (map.has(s[m])) {
      thislen = 1
      n = map.get(s[m]) + 1
      map.set(s[m], m)
      m = n + 1
    }
    if (s[m] !== s[n]) {
      thislen++
      map.set(s[m], m)
      if (thislen > maxlen) {
        maxlen = thislen
      }
      m++
    }
  }
  return maxlen
}

var lengthOfLongestSubstring1 = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set()
  const n = s.length
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1))
      ++rk
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
}

function lengthOfLongestSubstring2(s: string): number {
  const occ = new Set()
  const n = s.length
  let rk = -1,
    ans = 0
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1))
      ++rk
    }
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
}
