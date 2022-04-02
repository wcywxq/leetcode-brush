//<p>给你两棵二叉树： <code>root1</code> 和 <code>root2</code> 。</p>
//
//<p>想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，<strong>不为</strong> null 的节点将直接作为新二叉树的节点。</p>
//
//<p>返回合并后的二叉树。</p>
//
//<p><strong>注意:</strong> 合并过程必须从两个树的根节点开始。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例 1：</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/merge.jpg" style="height: 163px; width: 600px;" />
//<pre>
//<strong>输入：</strong>root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
//<strong>输出：</strong>[3,4,5,5,4,null,7]
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>root1 = [1], root2 = [1,2]
//<strong>输出：</strong>[2,2]
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li>两棵树中的节点数目在范围 <code>[0, 2000]</code> 内</li>
//	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>树</li><li>深度优先搜索</li><li>广度优先搜索</li><li>二叉树</li></div></div><br><div><li>👍 908</li><li>👎 0</li></div>

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // TODO method1 dfs
    /*if (!root1) return root2
    if (!root2) return root1
    let merged = new TreeNode(root1.val + root2.val)
    merged.left = mergeTrees(root1.left, root2.left)
    merged.right = mergeTrees(root1.right, root2.right)
    return merged*/
    // TODO method2 bfs
    if (!root1) return root2
    if (!root2) return root1
    let queue = []
    let queue1 = []
    let queue2 = []
    let merged = new TreeNode(root1.val + root2.val)
    queue.push(merged)
    queue1.push(root1)
    queue2.push(root2)
    while (queue1.length && queue2.length) {
        let node = queue.shift()
        let node1 = queue1.shift()
        let node2 = queue2.shift()
        let left1 = node1.left
        let left2 = node2.left
        let right1 = node1.right
        let right2 = node2.right
        if (left1 || left2) {
            if (left1 && left2) {
                let left = new TreeNode(left1.val + left2.val)
                node.left = left
                queue.push(left)
                queue1.push(left1)
                queue2.push(left2)
            } else if (left1) {
                node.left = left1
            } else if (left2) {
                node.left = left2
            }
        }
        if (right1 || right2) {
            if (right1 && right2) {
                let right = new TreeNode(right1.val + right2.val)
                node.right = right
                queue.push(right)
                queue1.push(right1)
                queue2.push(right2)
            } else if (right1) {
                node.right = right1
            } else if (right2) {
                node.right = right2
            }
        }
    }
    return merged
};
//leetcode submit region end(Prohibit modification and deletion)
