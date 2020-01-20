/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description 借助字典(map)，循环一次即可实现
 */
var twoSum = function(nums, target) {
    const map = {};
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const targetNum = target - nums[i];
        if (targetNum in map) return [map[targetNum], i];
        map[nums[i]] = i
    }
};

twoSum([2,7,11,15], 9)