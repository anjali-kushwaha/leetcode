/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

function fn(accum, curr){
    return accum+curr;
}

var reduce = function(nums, fn, init) {
    return nums.reduce(fn,init);
};