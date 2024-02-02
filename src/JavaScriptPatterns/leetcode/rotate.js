/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 将数组元素向右边移动K位
 */
var rotate = function(nums, k) {
    // 删除最后一个，插入到第一个，循环K次
    while(k){
        nums.unshift(nums.pop());
        k--
    }

    return nums
};

let arr = [-1,-100,3,99]

console.log(rotate(arr, 2))