//给你一个二叉树的根节点 <code>root</code> ，树中每个节点都存放有一个 <code>0</code> 到 <code>9</code> 之间的数字。
//<div class="original__bRMd">
//<div>
//<p>每条从根节点到叶节点的路径都代表一个数字：</p>
//
//<ul>
//	<li>例如，从根节点到叶节点的路径 <code>1 -> 2 -> 3</code> 表示数字 <code>123</code> 。</li>
//</ul>
//
//<p>计算从根节点到叶节点生成的 <strong>所有数字之和</strong> 。</p>
//
//<p><strong>叶节点</strong> 是指没有子节点的节点。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg" style="width: 212px; height: 182px;" />
//<pre>
//<strong>输入：</strong>root = [1,2,3]
//<strong>输出：</strong>25
//<strong>解释：</strong>
//从根到叶子节点路径 <code>1->2</code> 代表数字 <code>12</code>
//从根到叶子节点路径 <code>1->3</code> 代表数字 <code>13</code>
//因此，数字总和 = 12 + 13 = <code>25</code></pre>
//
//<p><strong>示例 2：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg" style="width: 292px; height: 302px;" />
//<pre>
//<strong>输入：</strong>root = [4,9,0,5,1]
//<strong>输出：</strong>1026
//<strong>解释：</strong>
//从根到叶子节点路径 <code>4->9->5</code> 代表数字 495
//从根到叶子节点路径 <code>4->9->1</code> 代表数字 491
//从根到叶子节点路径 <code>4->0</code> 代表数字 40
//因此，数字总和 = 495 + 491 + 40 = <code>1026</code>
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>树中节点的数目在范围 <code>[1, 1000]</code> 内</li>
//	<li><code>0 <= Node.val <= 9</code></li>
//	<li>树的深度不超过 <code>10</code></li>
//</ul>
//</div>
//</div>
//<div><div>Related Topics</div><div><li>树</li><li>深度优先搜索</li><li>二叉树</li></div></div><br><div><li>👍 501</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    // TODO method1 dfs
    const dfs = (node, prev) => {
        if (node === null) return 0;
        let sum = prev * 10 + node.val;
        if (node.left === null && node.right === null) return sum;
        return dfs(node.left, sum) + dfs(node.right, sum);
    }
    return dfs(root, 0);
};
//leetcode submit region end(Prohibit modification and deletion)
