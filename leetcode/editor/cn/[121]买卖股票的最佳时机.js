//<p>给定一个数组 <code>prices</code> ，它的第 <code>i</code> 个元素 <code>prices[i]</code> 表示一支给定股票第 <code>i</code> 天的价格。</p>
//
//<p>你只能选择 <strong>某一天</strong> 买入这只股票，并选择在 <strong>未来的某一个不同的日子</strong> 卖出该股票。设计一个算法来计算你所能获取的最大利润。</p>
//
//<p>返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 <code>0</code> 。</p>
//
//<p> </p>
//
//<p><strong>示例 1：</strong></p>
//
//<pre>
//<strong>输入：</strong>[7,1,5,3,6,4]
//<strong>输出：</strong>5
//<strong>解释：</strong>在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
//</pre>
//
//<p><strong>示例 2：</strong></p>
//
//<pre>
//<strong>输入：</strong>prices = [7,6,4,3,1]
//<strong>输出：</strong>0
//<strong>解释：</strong>在这种情况下, 没有交易完成, 所以最大利润为 0。
//</pre>
//
//<p> </p>
//
//<p><strong>提示：</strong></p>
//
//<ul>
//	<li><code>1 <= prices.length <= 10<sup>5</sup></code></li>
//	<li><code>0 <= prices[i] <= 10<sup>4</sup></code></li>
//</ul>
//<div><div>Related Topics</div><div><li>数组</li><li>动态规划</li></div></div><br><div><li>👍 2223</li><li>👎 0</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // TODO method1 动态规划, 一个变量存储
    // dp[i]: 截止到第 i 天，最低的买入价格
    // dp[i] = min(dp[i - 1], nums[i])
    /*let maxProfit = 0
    let dp = new Array(prices.length).fill(Number.MAX_VALUE)
    dp[0] = prices[0]
    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.min(dp[i - 1], prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - dp[i])
    }
    return maxProfit*/
    // TODO method2 动态规划，节省空间
    let maxProfit = 0
    let minBuyPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        minBuyPrice = Math.min(minBuyPrice, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - minBuyPrice)
    }
    return maxProfit
};
//leetcode submit region end(Prohibit modification and deletion)
