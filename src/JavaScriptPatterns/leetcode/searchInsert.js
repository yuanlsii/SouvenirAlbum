/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 搜索索引，使用二分法可以实现
 */

var searchInsert = function(nums, target) {
    // 是否先排序数组
    // 二分法
    // 初始化
    let mid = 0, // 中间值
        left = 0, // 二分左侧下标
        right = nums.length; // 二分右侧下标

    // 左闭右闭，只有left小于等于right，才能进入循环
    while (left <= right) {
        // 获取中位数，二分数组
        mid = left + ((right - left) >> 1)
        // 判断target在左边还是在右边
        if(target > nums[mid]) {
            // 如果target大于nums[mid]，则表示target在数组的右边
            left = mid + 1
        } else if(target < nums[mid]) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return -1
};

const arr = [1,3,4,5,6]
console.log(searchInsert(arr, 2))
