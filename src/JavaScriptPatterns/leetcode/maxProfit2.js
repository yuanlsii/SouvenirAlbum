/**
 * @param {number[]} prices
 * @return {number}
 * 可以在任何时候买入或者卖出，计算出获得最多利润的方式
 * 贪心算法
 */
function maxProfit(prices) {
    let maxProfit = 0; // 初始化最大利润为0

    for (let i = 1; i < prices.length; i++) {
        // 如果今天的价格高于昨天，就在今天买入并卖出
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
}

const arr = [7, 6, 5, 4, 8, 6, 2]

const result = maxProfit(arr)

console.log(result)