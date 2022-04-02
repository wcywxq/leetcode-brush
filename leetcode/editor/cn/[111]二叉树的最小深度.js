//<p>给定一个二叉树，找出其最小深度。</p>
//
//<p>最小深度是从根节点到最近叶子节点的最短路径上的节点数量。</p>
//
//<p><strong>说明：</strong>叶子节点是指没有子节点的节点。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg" style="width: 432px; height: 302px;" />
//<pre>
//<strong>输入：</strong>root = [3,9,20,null,null,15,7]
//<strong>输出：</strong>2
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>root = [2,null,3,null,4,null,5,null,6]
//<strong>输出：</strong>5
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>树中节点数的范围在 <code>[0, 10<sup>5</sup>]</code> 内</li>
//	<li><code>-1000 <= Node.val <= 1000</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>树</li><li>深度优先搜索</li><li>广度优先搜索</li><li>二叉树</li></div></div><br><div><li>👍 695</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    // TODO method1 dfs
    /*if (!root) return 0
    if (!root.left && !root.right) return 1
    let deep = Number.MAX_VALUE
    if (root.left) {
        deep = Math.min(deep, minDepth(root.left))
    }
    if (root.right) {
        deep = Math.min(deep, minDepth(root.right))
    }
    return deep + 1*/
    // TODO method2 bfs
    if (!root) return 0
    let queue = []
    let deep = 0
    queue.push(root)
    while (queue.length) {
        deep++
        let size = queue.length
        while (size > 0) {
            let node = queue.shift()
            if (!node.left && !node.right) return deep
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            size--
        }
    }
    return deep
};
//leetcode submit region end(Prohibit modification and deletion)
