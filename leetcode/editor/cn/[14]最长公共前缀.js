//<p>编写一个函数来查找字符串数组中的最长公共前缀。</p>
//
//<p>如果不存在公共前缀，返回空字符串&nbsp;<code>""</code>。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>strs = ["flower","flow","flight"]
//<strong>输出：</strong>"fl"
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>strs = ["dog","racecar","car"]
//<strong>输出：</strong>""
//<strong>解释：</strong>输入不存在公共前缀。</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
//	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
//	<li><code>strs[i]</code> 仅由小写英文字母组成</li>
//</ul>
//<div><div>Related Topics</div><div><li>字符串</li></div></div><br><div><li>👍 2276</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    strs.sort((a, b) => a.length - b.length)
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i]
        for (let j = 0; j < str.length; j++) {
            if (str.charAt(j) !== prefix.charAt(j)) {
                prefix = prefix.substring(0, j)
            }
        }
    }
    return prefix
};
//leetcode submit region end(Prohibit modification and deletion)
