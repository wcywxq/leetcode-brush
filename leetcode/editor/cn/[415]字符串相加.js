//<p>给定两个字符串形式的非负整数&nbsp;<code>num1</code> 和<code>num2</code>&nbsp;，计算它们的和并同样以字符串形式返回。</p>
//
//<p>你不能使用任何內建的用于处理大整数的库（比如 <code>BigInteger</code>），&nbsp;也不能直接将输入的字符串转换为整数形式。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>num1 = "11", num2 = "123"
//<strong>输出：</strong>"134"
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>num1 = "456", num2 = "77"
//<strong>输出：</strong>"533"
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>num1 = "0", num2 = "0"
//<strong>输出：</strong>"0"
//</pre>
//
//<p>&nbsp;</p>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= num1.length, num2.length &lt;= 10<sup>4</sup></code></li>
//	<li><code>num1</code> 和<code>num2</code> 都只包含数字&nbsp;<code>0-9</code></li>
//	<li><code>num1</code> 和<code>num2</code> 都不包含任何前导零</li>
//</ul>
//<div><div>Related Topics</div><div><li>数学</li><li>字符串</li><li>模拟</li></div></div><br><div><li>👍 531</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // TODO method 大数相加
    let n1 = num1.toString().split('')
    let n2 = num2.toString().split('')
    let res = ''
    let temp = 0
    while (n1.length || n2.length || temp) {
        temp += ~~n1.pop() + ~~n2.pop()
        res += temp % 10
        temp = temp > 9
    }
    return res.split('').reverse().join('')
};
//leetcode submit region end(Prohibit modification and deletion)
