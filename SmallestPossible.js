/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let min = 1
    let sorted = nums.sort((a, b) => a - b);
    for(let i = 0; i< sorted.length;i++){
        if(sorted[i] == min){
            min = min+1
        }
    }
    return min
};