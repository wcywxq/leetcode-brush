//<p>给你一个整数数组 <code>coins</code> ，表示不同面额的硬币；以及一个整数 <code>amount</code> ，表示总金额。</p>
//
//<p>计算并返回可以凑成总金额所需的 <strong>最少的硬币个数</strong> 。如果没有任何一种硬币组合能组成总金额，返回&nbsp;<code>-1</code> 。</p>
//
//<p>你可以认为每种硬币的数量是无限的。</p>
//
//<p>&nbsp;</p>
//
//<p><strong>示例&nbsp;1：</strong></p>
//
//<pre>
//<strong>输入：</strong>coins = <code>[1, 2, 5]</code>, amount = <code>11</code>
//<strong>输出：</strong><code>3</code> 
//<strong>解释：</strong>11 = 5 + 5 + 1</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>coins = <code>[2]</code>, amount = <code>3</code>
//<strong>输出：</strong>-1</pre>
//
//<p><strong>示例 3：</strong></p>
//
//<pre>
//<strong>输入：</strong>coins = [1], amount = 0
//<strong>输出：</strong>0
//</pre>
//
//<p>&nbsp;</p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 &lt;= coins.length &lt;= 12</code></li>
//	<li><code>1 &lt;= coins[i] &lt;= 2<sup>31</sup> - 1</code></li>
//	<li><code>0 &lt;= amount &lt;= 10<sup>4</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>广度优先搜索</li><li>数组</li><li>动态规划</li></div></div><br><div><li>👍 1830</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // TODO method1 动态规划
    // 问题转化：求可以凑成金额 i 的最少硬币个数
    // 方程：dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for (let i = 1; i < amount + 1; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j]) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};
//leetcode submit region end(Prohibit modification and deletion)
