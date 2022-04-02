//<p>给定整数数组 <code>nums</code> 和整数 <code>k</code>，请返回数组中第 <code><strong>k</strong></code> 个最大的元素。</p>
//
//<p>请注意，你需要找的是数组排序后的第 <code>k</code> 个最大的元素，而不是第 <code>k</code> 个不同的元素。</p>
//
//<p> </p>
//
//<p><strong>示例 1:</strong></p>
//
//<pre>
//<strong>输入:</strong> <code>[3,2,1,5,6,4] 和</code> k = 2
//<strong>输出:</strong> 5
//</pre>
//
//<p><strong>示例 2:</strong></p>
//
//<pre>
//<strong>输入:</strong> <code>[3,2,3,1,2,4,5,5,6] 和</code> k = 4
//<strong>输出:</strong> 4</pre>
//
//<p> </p>
//
//<p><strong>提示： </strong></p>
//
//<ul>
//	<li><code>1 <= k <= nums.length <= 10<sup>4</sup></code></li>
//	<li><code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>分治</li><li>快速选择</li><li>排序</li><li>堆（优先队列）</li></div></div><br><div><li>👍 1547</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // TODO method1 快排
    const quickSort = arr => {
        if (arr.length <= 1) return arr
        const middleIndex = arr.length >> 1
        const middle = arr.splice(middleIndex, 1)[0]
        let left = []
        let right = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < middle) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
        return quickSort(left).concat(middle, quickSort(right))
    }
    const result = quickSort(nums)
    return result[result.length - k]
};
//leetcode submit region end(Prohibit modification and deletion)
