/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const n=val;
    return obj={
        toBe: function(newval){
            if(n===newval){
                return true;}
            else
                throw new Error("Not Equal");
        },
        notToBe: function(newval){
           if(n!==newval){
                return true;}
            else
             throw new Error("Equal");

        }          
        }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */