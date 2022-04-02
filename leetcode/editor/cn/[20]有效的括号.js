//<p>给定一个只包括 <code>'('</code>，<code>')'</code>，<code>'{'</code>，<code>'}'</code>，<code>'['</code>，<code>']'</code> 的字符串 <code>s</code> ，判断字符串是否有效。</p>
//
//<p>有效字符串需满足：</p>
//
//<ol>
//	<li>左括号必须用相同类型的右括号闭合。</li>
//	<li>左括号必须以正确的顺序闭合。</li>
//</ol>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "()"
//<strong>输出：</strong>true
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "()[]{}"
//<strong>输出：</strong>true
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "(]"
//<strong>输出：</strong>false
//</pre>
//
//<p><strong>示例 4：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "([)]"
//<strong>输出：</strong>false
//</pre>
//
//<p><strong>示例 5：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "{[]}"
//<strong>输出：</strong>true</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= s.length <= 10<sup>4</sup></code></li>
//	<li><code>s</code> 仅由括号 <code>'()[]{}'</code> 组成</li>
//</ul>
//<div><div>Related Topics</div><div><li>栈</li><li>字符串</li></div></div><br><div><li>👍 3106</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // TODO method1 栈
    let map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])
    let stack = []
    for (let char of s) {
        if (map.has(char)) {
            stack.push(char)
        } else if (!stack.length || map.get(stack.pop()) !== char) {
            return false
        }
    }
    return !stack.length
};
//leetcode submit region end(Prohibit modification and deletion)
