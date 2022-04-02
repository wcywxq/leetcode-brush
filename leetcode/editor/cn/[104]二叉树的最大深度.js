//<p>给定一个二叉树，找出其最大深度。</p>
//
//<p>二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。</p>
//
//<p><strong>说明:</strong>&nbsp;叶子节点是指没有子节点的节点。</p>
//
//<p><strong>示例：</strong><br>
//给定二叉树 <code>[3,9,20,null,null,15,7]</code>，</p>
//
//<pre>    3
//   / \
//  9  20
//    /  \
//   15   7</pre>
//
//<p>返回它的最大深度&nbsp;3 。</p>
//<div><div>Related Topics</div><div><li>树</li><li>深度优先搜索</li><li>广度优先搜索</li><li>二叉树</li></div></div><br><div><li>👍 1156</li><li>👎 0</li></div>

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
var maxDepth = function(root) {
    // TODO 深度优先搜索 dfs
    /*if (!root) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1*/
    // TODO 广度优先搜索 bfs
    if (!root) return 0
    let queue = []
    let deep = 0
    queue.push(root)
    while (queue.length) {
        deep++
        let size = queue.length
        while (size > 0) {
            let node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            size--
        }
    }
    return deep
};
//leetcode submit region end(Prohibit modification and deletion)
