//<p>给你一个整数数组&nbsp;<code>nums</code>，请你将该数组升序排列。</p>
//
//<p>&nbsp;</p>
//
//<ol>
//</ol>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [5,2,3,1]
//<strong>输出：</strong>[1,2,3,5]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [5,1,1,2,0,0]
//<strong>输出：</strong>[0,0,1,1,2,5]
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
//	<li><code>-5 * 10<sup>4</sup> &lt;= nums[i] &lt;= 5 * 10<sup>4</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>分治</li><li>桶排序</li><li>计数排序</li><li>基数排序</li><li>排序</li><li>堆（优先队列）</li><li>归并排序</li></div></div><br><div><li>👍 506</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    // TODO method1 冒泡
    /*let length = nums.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums*/
    // TODO method2 选择
    /*let length = nums.length
    for (let i = 0; i < length; i++) {
        let min = i
        for (let j = i; j < length; j++) {
            if (nums[min] > nums[j]) {
                min = j
            }
        }
        if (min !== i) {
            [nums[i], nums[min]] = [nums[min], nums[i]]
        }
    }
    return nums*/
    // TODO method3 插入
    /*let length = nums.length
    let j, temp
    for (let i = 1; i < length; i++) {
        j = i
        temp = nums[i]
        while (j > 0 && nums[j - 1] > temp) {
            nums[j] = nums[j - 1]
            j--
        }
        nums[j] = temp
    }
    return nums*/
    // TODO method4 归并
    const dfs = (l, r) => {
        let i = 0
        let j = 0
        let res = []
        while (i < l.length && j < r.length) {
            if (l[i] < r[j]) {
                res.push(l[i++])
            } else {
                res.push(r[j++])
            }
        }
        return res.concat(i < l.length ? l.slice(i) : r.slice(j))
    }
    let length = nums.length
    if (length > 1) {
        let midIndex = length >> 1
        nums = dfs(sortArray(nums.slice(0, midIndex)), sortArray(nums.slice(midIndex, length)))
    }
    return nums
    // TODO method5 希尔
    // TODO method6 快排
    // TODO method7 堆排序
};
//leetcode submit region end(Prohibit modification and deletion)
