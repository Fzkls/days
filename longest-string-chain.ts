function longestStrChain(words: string[]): number {
    let length = 0
    const check = (str1: string, str2: string) => {
        const str1len = str1.length, str2len = str2.length
        if (str1len + 1 !== str2len) {
            return false
        }
        let i = 0, j = 0
        while (i< str1len && j < str2len) {
            if (str1[i] === str2[j]) {
                i++
            }
            j++
        }
        return i === str1len
    }
    words.sort((a, b) => {
        return a.length - b.length
    })
    let dp = []
    for (let index = 0; index < words.length; index++) {
        dp[index] = 1        
    }
    for (let l = 0; l < words.length; l++) {
        for (let k = 0; k < words.length; k++) {
            if (check(words[k], words[l])) {
                dp[l] = Math.max(dp[l], dp[k]+1)
            }
        }
        if (dp[l] > length) {
            length = dp[l]
        }
    }
    return length
};


function longestStrChain1(words: string[]): number {
    words.sort((a, b) => a.length - b.length);
    let ans = 0;
    let hashTable = new Map();
    for (let word of words) {
        let c = 1;
        for (let i = 0; i < word.length; i++) {
            let pre = word.substring(0, i) + word.substring(i+1);
            c = Math.max(c, (hashTable.get(pre) || 0) + 1);
        }
        hashTable.set(word, c);
        ans = Math.max(ans, c);
    }
    return ans;
};