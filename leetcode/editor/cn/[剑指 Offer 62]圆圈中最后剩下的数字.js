//<p>0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。</p>
//
//<p>例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入:</strong> n = 5, m = 3
//<strong>输出: </strong>3
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入:</strong> n = 10, m = 17
//<strong>输出: </strong>2
//</pre>
//
//<p> </p>
//
//<p><strong>限制：</strong></p>
//
//<ul>
//	<li><code>1 <= n <= 10^5</code></li>
//	<li><code>1 <= m <= 10^6</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>递归</li><li>数学</li></div></div><br><div><li>👍 575</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    // TODO method1 数学 + 迭代
    let res = 0
    for (let i = 2; i <= n; i++) {
        res = (res + m) % i
    }
    return res

    // TODO method2 数学 + 递归
    /*const dfs = (n, m) => {
        if (n === 1) return 0
        let x = dfs(n - 1, m)
        return (m + x) % n
    }
    return dfs(n, m)*/
};
//leetcode submit region end(Prohibit modification and deletion)
