//<p>给你一个只包含 <code>'('</code> 和 <code>')'</code> 的字符串，找出最长有效（格式正确且连续）括号子串的长度。</p>
//
//<p> </p>
//
//<div class="original__bRMd">
//<div>
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = "(()"
//<strong>输出：</strong>2
//<strong>解释：</strong>最长有效括号子串是 "()"
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = ")()())"
//<strong>输出：</strong>4
//<strong>解释：</strong>最长有效括号子串是 "()()"
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>s = ""
//<strong>输出：</strong>0
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>0 <= s.length <= 3 * 10<sup>4</sup></code></li>
//	<li><code>s[i]</code> 为 <code>'('</code> 或 <code>')'</code></li>
//</ul>
//</div>
//</div>
//<div><div>Related Topics</div><div><li>栈</li><li>字符串</li><li>动态规划</li></div></div><br><div><li>👍 1740</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    /**
     * TODO method1 动态规划
     * dp[i]: 以下标为 i 字符结尾的最长有效括号长度; dp[0...max]=0
     * 有效子串一定以 ) 结尾，以 ( 结尾的子串的 dp = 0，因此只需求解 ) 在 dp 数组中对应位置的值
     * 1. s[i]=) && s[i-1]=( -> dp[i]=dp[i-2]+2
     * 2. s[i]=) && s[i-1]=) -> s[i-dp[i-1]-1]=( -> dp[i]=dp[i-1]+dp[i-dp[i-1]-2]+2
     */
    let maxLength = 0
    let dp = new Array(s.length).fill(0)
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2
            } else if (
                s[i - 1] === ')' &&
                i > dp[i - 1] &&
                s[i - 1 - dp[i - 1]] === '('
            ) {
                dp[i] = (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + dp[i - 1] + 2
            }
        }
        maxLength = Math.max(maxLength, dp[i])
    }
    return maxLength
    // TODO method2 栈
    // TODO method3 字符串, 不需要额外空间
};
//leetcode submit region end(Prohibit modification and deletion)
