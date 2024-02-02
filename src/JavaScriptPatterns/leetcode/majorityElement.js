/**
 * @param {number[]} nums
 * @return {number}
 * 返回多数元素
 * 如果众数总是多与一半的时候，只需要排序之后去中间值即可
 */
var majorityElement = function(nums) {
    let numsSort = nums.sort((a, b) => a - b)
    return numsSort[Math.floor(numsSort.length / 2)]
};

const arr = [1, 1, 1, 4, 4, 4, 4];
console.log(majorityElement(arr));