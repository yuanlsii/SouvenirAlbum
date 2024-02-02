/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。
 * nums 的其余元素与 nums 的大小不重要。
 * 返回 k 。
 */
var removeDuplicates = function(nums) {
    let k = 0
    // 去重需要改变原数组
    // nums = [...new Set(nums)]
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // console.log(i, j)
            // console.log(nums[i], nums[j])
            if (nums[i] === nums[j] && nums[i+1] === nums[j+1]) {
                
                nums.splice(j, 1);
                j--; // 更新j以便继续检查当前位置
            }
        }
    }
    k = nums.length
    console.log(k, nums)
    return k, nums
};

let nums = [0,0,1,1,1,2,2,3,3,4]; // 输入数组
const expectedNums = [0,1,2,3,4]; // 长度正确的期望答案

const k = removeDuplicates(nums); // 调用

// console.log(nums)

//  console.log("1", k == expectedNums.length) 
// for (i = 0; i < k; i++) {
    // console.log("2",nums[i] == expectedNums[i])
    
// }
