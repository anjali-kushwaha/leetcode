/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var n=init;
    const variable=n; 
    function increment(){
     n++;
        return n;
    }
    function decrement(){
        n--;
        return n;
    }
    
    function reset(){
        n=variable;
       return n;
    }
    return {increment,reset,decrement};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */