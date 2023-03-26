// 'this is the first line\nAnd this is the second'
// the actual text is contained like this:
// this is the first line
// and this is the second
// 'a newline character is written like \'\\n\'.'
// 'strings are contained inside quotes'

const { isAsyncFunction } = require('util/types');

// backtick strings can do more tricks, like contain template literals:
console.log(`half of 100 is ${100/2}`); // half of 100 is 50


// unary operators
// not all operators are symbols, some are words
// one exmaple is typeof operator
console.log(typeof 4.5); // number
console.log(typeof 'x'); // string


// boolean values 
// true / false, good for yes/no, on/ off possibilities
// uses compairson
console.log(3 > 2); // true
console.log(2 > 3); // false


// strings can be compared this way also
console.log("Aardvark" < "Zoroaster") // true
// The way strings are ordered is roughly alphabetic but not really what you’d expect to see in a dictionary: uppercase letters are always “less” than lowercase ones, so "Z" < "a", and nonalphabetic characters (!, -, and so on) are also included in the ordering. When comparing strings, JavaScript goes over the characters from left to right, comparing the Unicode codes one by one.


console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false


// && represents logical and 
// result is true only if both the values given to it are true
console.log(true && false)
// → false
console.log(true && true)
// → true

// The || operator denotes logical or. It produces true if either of the values given to it is true.
console.log(false || true)
// → true
console.log(false || false)
// → false


// Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false, and !false gives true.
// || has the lowest precedence, then comes &&, then the comparison operators (>, ==, and so on), and then the rest. 
1 + 1 == 2 && 10 * 10 > 50


// The last logical operator I will discuss is not unary, not binary, but ternary, operating on three values. It is written with a question mark and a colon, like this:
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
//The value on the left of the question mark “picks” which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.


// automatic type conversion
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


// When comparing values of the same type using ==, the outcome is easy to predict: you should get true when both values are the same, except in the case of NaN
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
// When you do not want any type conversions to happen, there are two additional operators: === and !==.


// Short-circuiting of logical operators
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
//The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.


