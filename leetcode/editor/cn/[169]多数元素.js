//<p>给定一个大小为 <em>n </em>的数组，找到其中的多数元素。多数元素是指在数组中出现次数 <strong>大于</strong> <code>⌊ n/2 ⌋</code> 的元素。</p>
//
//<p>你可以假设数组是非空的，并且给定的数组总是存在多数元素。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>[3,2,3]
//<strong>输出：</strong>3</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>[2,2,1,1,1,2,2]
//<strong>输出：</strong>2
//</pre>
//
//<p> </p>
//
//<p><strong>进阶：</strong></p>
//
//<ul>
//	<li>尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。</li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>哈希表</li><li>分治</li><li>计数</li><li>排序</li></div></div><br><div><li>👍 1367</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // TODO method1 排序
    // return nums.sort((a, b) => a - b)[nums.length >> 1]
    // TODO method2 哈希表
    /*const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        if  (map.get(nums[i]) > (nums.length >> 1)) return nums[i]
    }*/
    // TODO method3 投票法
    let count = 0
    let ans
    for (let num of nums) {
        if (count === 0) {
            ans = num
        }
        count += ans === num ? 1 : -1
    }
    return ans
};
//leetcode submit region end(Prohibit modification and deletion)
