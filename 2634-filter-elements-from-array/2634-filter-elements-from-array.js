/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function fn(n)
{
    if(n>10)
        return n;
}

var filter = function(arr, fn) {
            
    return arr.filter(fn);
};