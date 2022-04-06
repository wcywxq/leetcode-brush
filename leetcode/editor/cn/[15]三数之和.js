//<p>给你一个包含 <code>n</code> 个整数的数组 <code>nums</code>，判断 <code>nums</code> 中是否存在三个元素 <em>a，b，c ，</em>使得 <em>a + b + c = </em>0 ？请你找出所有和为 <code>0</code> 且不重复的三元组。</p>
//
//<p><strong>注意：</strong>答案中不可以包含重复的三元组。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [-1,0,1,2,-1,-4]
//<strong>输出：</strong>[[-1,-1,2],[-1,0,1]]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = []
//<strong>输出：</strong>[]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums = [0]
//<strong>输出：</strong>[]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>0 <= nums.length <= 3000</code></li>
//	<li><code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>双指针</li><li>排序</li></div></div><br><div><li>👍 4594</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // TODO method1 数组 + 双指针
    let res = []
    let len = nums.length
    if (len < 3) return res
    nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break // 第一个数大于 0，则不成立
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = len - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                while (nums[left] === nums[left + 1]) left++
                while (nums[right] === nums[right - 1]) right--
                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
