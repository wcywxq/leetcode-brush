//<p>给你一棵二叉树的根节点 <code>root</code> ，翻转这棵二叉树，并返回其根节点。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//
//<p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg" style="height: 165px; width: 500px;" /></p>
//
//<pre>
//<strong>输入：</strong>root = [4,2,7,1,3,6,9]
//<strong>输出：</strong>[4,7,2,9,6,3,1]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg" style="width: 500px; height: 120px;" /></p>
//
//<pre>
//<strong>输入：</strong>root = [2,1,3]
//<strong>输出：</strong>[2,3,1]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>root = []
//<strong>输出：</strong>[]
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>树中节点数目范围在 <code>[0, 100]</code> 内</li>
//	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>树</li><li>深度优先搜索</li><li>广度优先搜索</li><li>二叉树</li></div></div><br><div><li>👍 1209</li><li>👎 0</li></div>

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // TODO method1 dfs
    /*if (!root) return null
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right
    root.right = left
    return root*/
    // TODO method2 bfs
    if (!root) return null
    let queue = []
    queue.push(root)
    while (queue.length) {
        let node = queue.shift()
        let temp = node.left
        node.left = node.right
        node.right = temp
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return root
};
//leetcode submit region end(Prohibit modification and deletion)
