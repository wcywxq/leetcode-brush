//<p>给定两个大小分别为 <code>m</code> 和 <code>n</code> 的正序（从小到大）数组&nbsp;<code>nums1</code> 和&nbsp;<code>nums2</code>。请你找出并返回这两个正序数组的 <strong>中位数</strong> 。</p>
//
//<p>算法的时间复杂度应该为 <code>O(log (m+n))</code> 。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums1 = [1,3], nums2 = [2]
//<strong>输出：</strong>2.00000
//<strong>解释：</strong>合并数组 = [1,2,3] ，中位数 2
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>nums1 = [1,2], nums2 = [3,4]
//<strong>输出：</strong>2.50000
//<strong>解释：</strong>合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
//</pre>
//
//<p>&nbsp;</p>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>nums1.length == m</code></li>
//	<li><code>nums2.length == n</code></li>
//	<li><code>0 &lt;= m &lt;= 1000</code></li>
//	<li><code>0 &lt;= n &lt;= 1000</code></li>
//	<li><code>1 &lt;= m + n &lt;= 2000</code></li>
//	<li><code>-10<sup>6</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>6</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>二分查找</li><li>分治</li></div></div><br><div><li>👍 5277</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // TODO method1 二分合并数组
    /*let arr = nums1.concat(nums2).sort((a, b) => a - b);
    let len = arr.length;
    if (len % 2 === 0) {
        return (arr[(len >> 1) - 1] + arr[len >> 1]) / 2;
    }  else {
        return arr[(len - 1) >> 1]
    }*/

    // TODO method2 二分查找不合并，直接找到中位数
    let len1 = nums1.length, len2 = nums2.length;
    let len = len1 + len2;
    let mid = len >> 1;
    let i = 0, j = 0, k = 0;
    let nums = [];
    while(i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            nums[k++] = nums1[i++];
        } else {
            nums[k++] = nums2[j++];
        }
    }
    while (i < len1) {
        nums[k++] = nums1[i++];
    }
    while (j < len2) {
        nums[k++] = nums2[j++];
    }
    if (len % 2 === 0) {
        return (nums[mid - 1] + nums[mid]) / 2;
    } else {
        return nums[mid];
    }
};
//leetcode submit region end(Prohibit modification and deletion)
