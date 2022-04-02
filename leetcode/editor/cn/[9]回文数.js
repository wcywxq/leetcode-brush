//<p>给你一个整数 <code>x</code> ，如果 <code>x</code> 是一个回文整数，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p>
//
//<p>回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。</p>
//
//<ul>
//	<li>例如，<code>121</code> 是回文，而 <code>123</code> 不是。</li>
//</ul>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>x = 121
//<strong>输出：</strong>true
//</pre>
//
//<p><strong>示例&nbsp;2：</strong></p>
//
//<pre>
//<strong>输入：</strong>x = -121
//<strong>输出：</strong>false
//<strong>解释：</strong>从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>x = 10
//<strong>输出：</strong>false
//<strong>解释：</strong>从右向左读, 为 01 。因此它不是一个回文数。
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>-2<sup>31</sup>&nbsp;&lt;= x &lt;= 2<sup>31</sup>&nbsp;- 1</code></li>
//</ul>
//
//<p>&nbsp;</p>
//
//<p><strong>进阶：</strong>你能不将整数转为字符串来解决这个问题吗？</p>
//<div><div>Related Topics</div><div><li>数学</li></div></div><br><div><li>👍 1905</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // TODO method1 字符串
    // return x.toString().split('').reverse().join('') === x.toString()

    // TODO method2 字符串 + 双指针
    // let s = x.toString()
    // let l = 0
    // let r = s.length - 1
    // while (l < r) {
    //     if (s[l] !== s[r]) return false
    //     l++
    //     r--
    // }
    // return true

    // TODO method3 余数重组
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false
    let res = 0
    let s = x
    while (s) {
        res = res * 10 + s % 10
        s = Math.floor(s / 10)
    }
    return x === res
};
//leetcode submit region end(Prohibit modification and deletion)
