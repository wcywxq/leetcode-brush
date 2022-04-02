//<p>给定&nbsp;<code>n</code> 个非负整数表示每个宽度为 <code>1</code> 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png" style="height: 161px; width: 412px;" /></p>
//
//<pre>
//<strong>输入：</strong>height = [0,1,0,2,1,0,1,3,2,1,2,1]
//<strong>输出：</strong>6
//<strong>解释：</strong>上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>height = [4,2,0,3,2,5]
//<strong>输出：</strong>9
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>n == height.length</code></li>
//	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
//	<li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>栈</li><li>数组</li><li>双指针</li><li>动态规划</li><li>单调栈</li></div></div><br><div><li>👍 3270</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // TODO method1 双指针
    let n = height.length
    if (n === 0) return 0
    let res = 0
    let left = 0
    let right = n - 1

    let l_max = height[left]
    let r_max = height[right]

    while (left < right) {
        l_max = Math.max(l_max, height[left])
        r_max = Math.max(r_max, height[right])
        if (l_max < r_max) {
            res += l_max - height[left]
            left++
        } else {
            res += r_max - height[right]
            right--
        }
    }
    return res

    // TODO method1 暴力破解
    /*let n = height.length
    if (n === 0) return 0
    let res = 0
    for (let i = 1; i < n - 1; i++) {
        let l_max = 0
        let r_max = 0
        for (let j = i; j < n; j++) {
            r_max = Math.max(r_max, height[j])
        }
        for (let j = i; j >= 0; j--) {
            l_max = Math.max(l_max, height[j])
        }
        res += Math.min(l_max, r_max) - height[i]
    }
    return res*/

    // TODO method3 暴力破解优化
    /*let n = height.length
    if (n === 0) return 0
    let res = 0
    let l_max = new Array(n)
    let r_max = new Array(n)
    l_max[0] = height[0]
    r_max[n - 1] = height[n - 1]
    for (let i = 1; i < n; i++) {
        l_max[i] = Math.max(l_max[i - 1], height[i])
    }
    for (let i = n - 2; i >= 0; i--) {
        r_max[i] = Math.max(r_max[i + 1], height[i])
    }
    for (let i = 1; i < n - 1; i++) {
        res += Math.min(l_max[i], r_max[i]) - height[i]
    }
    return res*/
};
//leetcode submit region end(Prohibit modification and deletion)
