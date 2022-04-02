//<p>给定一个不含重复数字的数组 <code>nums</code> ，返回其 <em>所有可能的全排列</em> 。你可以 <strong>按任意顺序</strong> 返回答案。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1,2,3]
//<strong>输出：</strong>[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [0,1]
//<strong>输出：</strong>[[0,1],[1,0]]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [1]
//<strong>输出：</strong>[[1]]
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= nums.length &lt;= 6</code></li>
//	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
//	<li><code>nums</code> 中的所有整数 <strong>互不相同</strong></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>回溯</li></div></div><br><div><li>👍 1882</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // TODO method 回溯
    let res = []
    let path = []
    const dfs = () => {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let num of nums) {
            if (!path.includes(num)) {
                path.push(num)
                dfs()
                path.pop()
            }
        }
    }
    dfs()
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
