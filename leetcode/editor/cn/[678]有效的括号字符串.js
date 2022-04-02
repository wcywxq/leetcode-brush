//<p>给定一个只包含三种字符的字符串：<code>（&nbsp;</code>，<code>）</code>&nbsp;和 <code>*</code>，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：</p>
//
//<ol>
//	<li>任何左括号 <code>(</code>&nbsp;必须有相应的右括号 <code>)</code>。</li>
//	<li>任何右括号 <code>)</code>&nbsp;必须有相应的左括号 <code>(</code>&nbsp;。</li>
//	<li>左括号 <code>(</code> 必须在对应的右括号之前 <code>)</code>。</li>
//	<li><code>*</code>&nbsp;可以被视为单个右括号 <code>)</code>&nbsp;，或单个左括号 <code>(</code>&nbsp;，或一个空字符串。</li>
//	<li>一个空字符串也被视为有效字符串。</li>
//</ol>
//
//<p><strong>示例 1:</strong></p>
//
//<pre>
//<strong>输入:</strong> &quot;()&quot;
//<strong>输出:</strong> True
//</pre>
//
//<p><strong>示例 2:</strong></p>
//
//<pre>
//<strong>输入:</strong> &quot;(*)&quot;
//<strong>输出:</strong> True
//</pre>
//
//<p><strong>示例 3:</strong></p>
//
//<pre>
//<strong>输入:</strong> &quot;(*))&quot;
//<strong>输出:</strong> True
//</pre>
//
//<p><strong>注意:</strong></p>
//
//<ol>
//	<li>字符串大小将在 [1，100] 范围内。</li>
//</ol>
//<div><div>Related Topics</div><div><li>栈</li><li>贪心</li><li>字符串</li><li>动态规划</li></div></div><br><div><li>👍 460</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    // TODO method1 栈(维护两个栈)
    let leftStack = []
    let starStack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            leftStack.push(i)
        } else if (s[i] === '*') {
            starStack.push(i)
        } else {
            if (leftStack.length) {
                leftStack.pop()
            } else if (starStack.length) {
                starStack.pop()
            } else {
                return false
            }
        }
    }
    while (leftStack.length && starStack.length) {
        if (leftStack.pop() > starStack.pop()) {
            return false
        }
    }
    return !leftStack.length
    // TODO method2 贪心
    // TODO method3 动态规划
};
//leetcode submit region end(Prohibit modification and deletion)
