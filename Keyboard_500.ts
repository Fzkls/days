function findWords(words: string[]): string[] {
    const returnStr = []
    const strs: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    const strMap = new Map()
    for (let i = 0; i < strs.length; i++) {
        const value = strs[i]
        for (let index = 0; index < value.length; index++) {
            strMap.set(value[index], i)
        }
    }
    for (let wi = 0; wi < words.length; wi++) {
        let colNum = -1
        const value = words[wi]
        for (let ti = 0; ti < value.length; ti++) {
            const thisCol = strMap.get(value[ti].toLocaleLowerCase())
            if (colNum === -1) colNum = thisCol
            if (colNum !== thisCol) {
                break
            }
            if (ti === value.length - 1) {
                returnStr.push(value)
            }
        }
    }
    return returnStr
};

function findWords2(words: string[]): string[] {
    const lines: string[] = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    const res: string[] = []
    for (let i: number = 0, n: number = words.length; i < n; i++) {
        const value = words[i].toLowerCase()
        const cur: string = value[0]
        const line: string = lines.find(l => l.indexOf(cur) > -1)
        let flag: number = 1
        for (let j: number = 1, m: number = words[i].length; j < m; j++) {
            if (line.indexOf(value[j]) < 0) {
                flag = 0
            }
        }
        flag && res.push(words[i])
    }
    return res
};

function findWords3(words: string[]): string[] {
    const str1 = 'qwertyuiop'
    const str2 = 'asdfghjkl'
    const str3 = 'zxcvbnm'
    let res = []
    for (let word of words) {
        let flag = 0;
        for (let i = 0; i < word.length; i++) {
            let char = word[i].toLocaleLowerCase()
            let tf = 0;
            if (str1.indexOf(char) != -1) {
                tf = 1
            }
            else if (str2.indexOf(char) != -1) {
                tf = 2
            }
            else if (str3.indexOf(char) != -1) {
                tf = 3
            }
            if (i === 0) {
                flag = tf
            } else {
                if (flag !== tf) {
                    flag = 4
                    break
                }
            }
        }
        if (flag != 4) {
            res.push(word)
        }
    }
    return res;
};