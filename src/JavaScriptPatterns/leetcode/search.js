/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 */
// var search = function(nums, target) {
//     // 查找数组target的下标
//     for (let i = 0; i < nums.length; i++) {
//         const e = nums[i];
//         if(e === target) return i
//     }
//     return -1
// };

// 使用二分法实现
// 数组需要去重，并且排序
// 分开数组左右两边，如果target小于中间数min，则把左边的数组再分两边，直到找到target
var search = function(nums, target) {
    // 
    let min = 0, left = 0, right = nums.length
    // 如果左边的下标小于等于右边的下标才进入循环
    while (left <= right) {
        // 找到中间数，防止溢出
        min = left + ((right - left) >> 1)
        console.log(min)
        if(target < nums[min]) {
            right = min - 1
        } else if(target > nums[min]) {
            left = min + 1
        } else {
            return min
        }
    }
    return -1
}

const arr = [-1,0,3,4,2,12]

// search(arr, 2)

console.log(search(arr, 2))