//<p>给你一个字符串 <code>s</code>，找到 <code>s</code> 中最长的回文子串。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "babad"
//<strong>输出：</strong>"bab"
//<strong>解释：</strong>"aba" 同样是符合题意的答案。
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "cbbd"
//<strong>输出：</strong>"bb"
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
//	<li><code>s</code> 仅由数字和英文字母组成</li>
//</ul>
//<div><div>Related Topics</div><div><li>字符串</li><li>动态规划</li></div></div><br><div><li>👍 4904</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // TODO 暴力破解
    let length = s.length
    if (length < 2) return s
    let maxLength = 1
    let begin = 0
    const isPalindRoom = (s, i, j) => {
        while (i < j) {
            if (s[i] !== s[j]) return false
            i++
            j--
        }
        return true
    }
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (j - i + 1 > maxLength && isPalindRoom(s, i, j)) {
                maxLength = j - i + 1
                begin = i
            }
        }
    }
    return s.substring(begin, begin + maxLength)
    // TODO 动态规划
    // TODO 中心对称算法
};
//leetcode submit region end(Prohibit modification and deletion)
