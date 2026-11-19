/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init;

    return {
        increment: function() {
            current += 1;
            return current;
        },
        decrement: function() {
            current -= 1;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
};

 
const counter = createCounter(0);
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());
 