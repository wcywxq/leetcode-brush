//<p>给定一个二叉树的根节点 <code>root</code> ，返回它的 <strong>中序</strong> 遍历。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" style="width: 202px; height: 324px;" />
//<pre>
//<strong>输入：</strong>root = [1,null,2,3]
//<strong>输出：</strong>[1,3,2]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>root = []
//<strong>输出：</strong>[]
//</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>root = [1]
//<strong>输出：</strong>[1]
//</pre>
//
//<p><strong>示例 4：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg" style="width: 202px; height: 202px;" />
//<pre>
//<strong>输入：</strong>root = [1,2]
//<strong>输出：</strong>[2,1]
//</pre>
//
//<p><strong>示例 5：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg" style="width: 202px; height: 202px;" />
//<pre>
//<strong>输入：</strong>root = [1,null,2]
//<strong>输出：</strong>[1,2]
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>树中节点数目在范围 <code>[0, 100]</code> 内</li>
//	<li><code>-100 <= Node.val <= 100</code></li>
//</ul>
//
//<p> </p>
//
//<p><strong>进阶:</strong> 递归算法很简单，你可以通过迭代算法完成吗？</p>
//<div><div>Related Topics</div><div><li>栈</li><li>树</li><li>深度优先搜索</li><li>二叉树</li></div></div><br><div><li>👍 1333</li><li>👎 0</li></div>

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // TODO method1 dfs
    /*let res = []
    const dfs = node => {
        if (!node) return
        dfs(node.left)
        res.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    return res*/
    // TODO method2 bfs
    let stack = []
    let res = []
    while (stack.length || root) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }
    return res
};
//leetcode submit region end(Prohibit modification and deletion)
