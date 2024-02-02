/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0; // 如果数组为空，返回0
    }

    const n = prices.length;
    // 创建一个长度为N的数组，并且初始化所有元素为0
    const dp = new Array(n).fill(0); // 创建一个与价格数组长度相同的动态规划数组

    let minPrice = prices[0]; // 初始化最低买入价格为第一天的价格

    for (let i = 1; i < n; i++) {
        // 循环对比数组值，更新minprice为最低值
        minPrice = Math.min(minPrice, prices[i]); // 更新最低买入价格
        // prices[i] - minPrice为利润，循环对比找出最大利润，保存到dp数组中
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice); // 更新动态规划数组
    }

    return dp[n - 1]; // 返回动态规划数组的最后一个元素，它包含了最大利润
}

const arr = [7, 1, 5, 3, 6, 4]

maxProfit(arr)

const result = maxProfit(arr);
console.log(result); // 输出 5，因为在第二天买入（价格为1）并在第五天卖出（价格为6），获得最大利润为5。
