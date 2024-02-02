/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0; // 左指针，用于指向不等于 val 的元素
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            // 如果当前元素不等于 val，将其移到左指针位置
            nums[left] = nums[right];
            left++;
        }
    }

    // 截取数组，保留不等于 val 的部分
    nums.length = left;
};

const arr = [0, 1, 2, 2, 3, 0, 4, 2, 2, 2];
removeElement(arr, 2);
console.log(arr); // 输出 [0, 1, 3, 0, 4]