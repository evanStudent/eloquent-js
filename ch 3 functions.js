// functions are the bread and butter or js programming 
// the concept of wrapping a piece of program in a value has many uses 
// most obvious application of functions is defining new vocaulary

// defining a function 
// a regular binding where the value of the binding is a function 
// for example, this code defines square to refer to a function that produces the square of a given number 
const square = function(x) {
    return x * x;
};

console.log(square(12)); // 144

// functions have a set of paramenters (in the case above, only x)
// and a bodym which contains the statements that are to be executed when the function is called 
// the function body of a function created this way must always be wrapped in braces 

// a function can have multiple parameters or no paramters at all 
const makeNoise = function() {
    console.log('Pling!');
};

makeNoise(); // Pling!


const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count ++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10)); // 1024
// parameters to a function behave like regular bindings, but their initial values are fiven by the caller of the function, not the code itself 


// bindings and scopes 
