/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 */
var canJump = function(nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) return false
        if(i > k) return false
        k = i + nums[i]
    }
    return true
};

const arr = [3,2,1,0,4]

console.log(canJump(arr))