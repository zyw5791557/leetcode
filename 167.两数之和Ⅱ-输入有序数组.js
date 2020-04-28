/**
 * @type 简单
 * 
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 
 * 说明:
 * 1. 返回的下标值（index1 和 index2）不是从零开始的。
 * 2. 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 说明: 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 * 
 */


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index1, index2;
    let len = numbers.length;
    for (let i = len - 1; i >= 0; i--) {
        index2 = i
        for (let j = i - 1; j >= 0; j--) {
            if (numbers[j] === target - numbers[i]) {
                index1 = j
                return [index1 + 1, index2 + 1]
            }
        }
    }
};
