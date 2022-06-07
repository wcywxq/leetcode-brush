//<p>在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。</p>
//
//<p><strong>示例 1:</strong></p>
//
//<pre>
//输入：s = "abaccdeff"
//输出：'b'
//</pre>
//
//<p><strong>示例 2:</strong></p>
//
//<pre>
//输入：s = "" 
//输出：' '
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>限制：</strong></p>
//
//<p><code>0 &lt;= s 的长度 &lt;= 50000</code></p>
//<div><div>Related Topics</div><div><li>队列</li><li>哈希表</li><li>字符串</li><li>计数</li></div></div><br><div><li>👍 236</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    if (!s.length) return ' '
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        map.set(char, map.has(char) ? map.get(char) + 1: 1)
    }
    let onceList = [...map].filter(([_, v]) => v === 1)
    if (!onceList.length) return ' '
    return onceList[0][0]
};
//leetcode submit region end(Prohibit modification and deletion)
