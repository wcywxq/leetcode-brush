//<p>以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> 。请你合并所有重叠的区间，并返回&nbsp;<em>一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间</em>&nbsp;。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>intervals = [[1,3],[2,6],[8,10],[15,18]]
//<strong>输出：</strong>[[1,6],[8,10],[15,18]]
//<strong>解释：</strong>区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
//</pre>
//
//<p><strong>示例&nbsp;2：</strong></p>
//
//<pre>
//<strong>输入：</strong>intervals = [[1,4],[4,5]]
//<strong>输出：</strong>[[1,5]]
//<strong>解释：</strong>区间 [1,4] 和 [4,5] 可被视为重叠区间。</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= intervals.length &lt;= 10<sup>4</sup></code></li>
//	<li><code>intervals[i].length == 2</code></li>
//	<li><code>0 &lt;= start<sub>i</sub> &lt;= end<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>排序</li></div></div><br><div><li>👍 1415</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // TODO method1 数组排序
    if (intervals.length === 0) return []
    // 第一波排序
    intervals.sort((a, b) => a[0] - b[0])
    let res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= res[res.length - 1][1]) {
            // 合并区间
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
        } else {
            res.push(intervals[i])
        }
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
