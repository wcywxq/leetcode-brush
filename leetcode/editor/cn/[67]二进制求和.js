//<p>给你两个二进制字符串，返回它们的和（用二进制表示）。</p>
//
//<p>输入为 <strong>非空 </strong>字符串且只包含数字&nbsp;<code>1</code>&nbsp;和&nbsp;<code>0</code>。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例&nbsp;1:</strong></p>
//
//<pre><strong>输入:</strong> a = &quot;11&quot;, b = &quot;1&quot;
//<strong>输出:</strong> &quot;100&quot;</pre>
//
//<p><strong>示例&nbsp;2:</strong></p>
//
//<pre><strong>输入:</strong> a = &quot;1010&quot;, b = &quot;1011&quot;
//<strong>输出:</strong> &quot;10101&quot;</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>每个字符串仅由字符 <code>&#39;0&#39;</code> 或 <code>&#39;1&#39;</code> 组成。</li>
//	<li><code>1 &lt;= a.length, b.length &lt;= 10^4</code></li>
//	<li>字符串如果不是 <code>&quot;0&quot;</code> ，就都不含前导零。</li>
//</ul>
//<div><div>Related Topics</div><div><li>位运算</li><li>数学</li><li>字符串</li><li>模拟</li></div></div><br><div><li>👍 780</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // TODO method1 bigInt
    a = '0b' + a
    b = '0b' + b
    let sum = BigInt(a) + BigInt(b)
    return sum.toString(2)

    // TODO method2 二进制
    // (a & b) << 1 得到进位数
    // a ^ b 不进位置加法，结果更新给 a
    // 得到进位数，更新给 b
    /*let n1 = BigInt('0b' + a)
    let n2 = BigInt('0b' + b)
    while (n2 !== 0n) {
        let curry = n1 & n2
        n1 = n1 ^ n2
        n2 = curry << 1n
    }
    return n1.toString(2)*/

    // TODO method3
    /*let ans = ''
    let i = a.length - 1
    let j = b.length - 1
    let curry = 0
    while (i >= 0 || j >= 0) {
        let x = i >= 0 ? a[i--] - '0' : 0
        let y = j >= 0 ? b[j--] - '0' : 0
        let sum = x + y + curry
        ans += sum % 2
        curry = sum >> 1
    }
    if (curry) {
        ans += curry
    }
    return ans.split('').reverse().join('')*/
};
//leetcode submit region end(Prohibit modification and deletion)
