// https://leetcode-cn.com/problems/longest-palindromic-substring/
// https://leetcode-cn.com/problems/longest-palindromic-substring/
function longestPalindrome(s: string): string {
  const strlen = s.length
  if (s == null || strlen < 2) {
    return s
  }
  let maxlen = 1,
    begin = 0,
    end = 0
  let dp: boolean[][] = new Array(strlen).fill(new Array(strlen).fill(false))
  for (let i = 1; i < strlen; i++) {
    for (let j = 0; j < i; j++) {
      if (s[i] === s[j] && (i - j <= 2 || dp[j + 1][i - 1])) {
        dp[i][j] = true
        if (i - j + 1 > maxlen) {
          maxlen = i - j + 1
          begin = j
          end = i
        }
      }
    }
  }
  return s.slice(begin, end + 1)
}
