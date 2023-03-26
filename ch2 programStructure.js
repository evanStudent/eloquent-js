// program structure
// expressions and statements 
// the simplist kind of statement is an expression with a semicolon after it. this is a program:
1;
!false;
// useless programs though, an express can be content to just product a value when can then be used by the enclosing code 


// bindings 
// how to programs remember things/ keep an internal state? bindings
let caught = 5 * 5; // 25

let ten = 10;
console.log(ten * ten); // 100;


// lets can be changed/ reassigned 
let mood = 'light'; 
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark


let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

// digits can be part of names but cannot start with them
// they can inlcude $ and _ but not other special characters 

// here is a list of js keywords
// break case catch class const continue debugger default
// delete do else enum export extends false finally for
// function if implements import interface in instanceof let
// new package private protected public return static super
// switch this throw true try typeof var void while with yield

// the environment 
// the collection of bindings and their values that exist at a given time 

// functions 
// a piece of program wrapped in a value 
// such values can be applied in order to run the wrapped program 
// example of function that shows a dialog box asking for user input
const prompt = require('prompt-sync')({sigint:true});
prompt("Enter passcode");


// executing a function is called invoking, calling or applying it
// you can call a function by putting parenthese after an expressioon that produces a function value
// the values between the parentheses are given to the program inside the function
// values given to functions are called arguments 

// the console.log function 
// writes arguments in some text output device 
// this is built into the cosole of most browswers and shortcut to open is F12
// example of how to use console.log
let x = 30;
console.log("the value of x is", x);
// → the value of x is 30


// return values 
// when a function produces a value, it is said to return that value 
console.log(Math.min(2,4) + 100);
// → 102 is the return value being printed to console with console.log



// control flow 
// when you program contains more than one statement, the statements are executed as if they are a story, from top to bottom
// the following program has two statemetns
// let theNumber = Number(prompt('Pick a number')); // first asks the user for a number
console.log('Your number is the square root of' + theNumber * theNumber); // the second (which is executed after the first) shows the square of that number 


// conditional execution 
// sometimes you want to create branching roads where the program takes the proper branch based on the situation
// these are created with the if keyword
// code to be executed if (and only if) a certain condition holds 
let theNumber = Number(prompt('Pick a number'));
if (!Number.isNaN(theNumber)) {
    console.log('Your number is the square root of ' + theNumber * theNumber);
} 
// with this modification, if you enter 'parrot', no output is shown
// the Number.isNaN function is a standard js function that returns true only if the argument is NaN (not a number)
// add response for alternative branch
let newNumber = Number(prompt('Pick a number'));
if (!Number.isNaN(newNumber)) {
    console.log('Your number is the square root of' + newNumber * newNumber);
} else {
    console.log("Hey, why didn't you give me a number?");
}


// if you have more than two paths to choose from, you can 'chain' multiple if/ else pairs together
if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");   
}


// while and do loops 
// consider a program that outputs all even numbers from 0 to 12\
// it might look like this:
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
// when we need to run a piece of code multiple times, this form of control flor is called a loop
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
    }
// → 0 // → 2 //   … etcetera

// while loops keeps enbtering that statement as long as the expression prodfuces a value that gives true when converted to Boolean 
// write a program that calculates and shows the value of 2 to the 10th power 
// this requires two bindings: one to keep track of our result, one to count how often we have multiplied this result by 2
// this loop tests whether second binding has reached 10 yet, if not, updates both bindings 
let result = 1;
let counter = 0; // it's a good idea to start from 0 when counting and not 1 
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result); // 1024


// a do loop is a control structure similar to a while loop 
// if differs only on one point: a do loop executes its body atleast once
// it starts testing whether it should stop only after the first execution 
let yourName;
do {
    yourName = prompt('Who are you?'); // program forces you to enter your name 
} while (!yourName); 
console.log(yourName); // it will ask again and again until it gets something that is not an empty string 


// for loops 
let forResult = 1;
for (let coutner = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result); // 1024

// breaking out of a loop
// producing false is not the only way a loop can finish 
// the break statement has the effect of immediately jumping out of the enclosing loop 
// the following program uses a break statement
// it finds the first number that is both greater than or equal to 20 and divisible by 7
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
} // 21

// using the remainder (%) is the easy wau to test whether a number is divisiable by another number 
// if it is, remainder of their division is 0
// if you remove the break statement and accidentally create a loop that always returns true the program gets stuck running an infinite loop (this is usually a bad thing)

// the continue keyword is similar to break, in that it influences the progress of a loop
// when continue is encountered in a loop body, control jumps out of the body and continues with the loop's next iteration 

// updating bindings succinctly 
// program often needs to update a binding to hold a value based on that binding's previous value
counter = coutner + 1;
// js provides a similar shortcut for this:
counter += 1;
// similar shortcuts work for many other operators
// such as result *= 2 to double result  
// counter -= 1 to count downward 
for (let number = 0; number <= 12; number += 2) {
    console.log(number);
}
// for counter += 1 and counter -= 1 they can be shortened to:
// counter ++ and counter -- 

// dispating on a value with switch 
// it's common for code to look like this:
if (x == "value1") isAsyncFunction();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
// there is a construct called switch that is intended to express such a 'dispatch' in a more direct way 
// syntax (inherited from C/Java) is kind of awkward 
// chain of if statements may look better, example:
switch (prompt('What is the weather like?')) {
    case 'rainy':
        console.lot("remember to bring an umbrella");
        break;
    case 'sunny':
        console.log("Dress Lightly");
        break;
    default:
        console.log("unknown weather type!");
        break;
} 
// you may put any number of case labels inside the block opened by switch
// the program will start executing at the label that corresponds to the value that switch was given, or at deault if not matching value is foudn
// it continues, even across other labels, until it reaches a break statement

// summary 
// programs are built out of statements, which themselves can contain multiple statements 
// statements often contain expressions, with themselves can be built out of smaller expressions 
// putting statements after one another gives you a program that is executed from top to bottom 
// you can introduce disturbances in the flow of control by using conditional statements 
// conditional statemetns: (if, else, and switch)
// looping statements: (while, do and for) 

// exercizes 

// looping a triangle 
// write a loop that makes seven calls to console.log to output the following triangle
// #
// ##
// ###
// ####
// #####
// ######
// #######

// it may be useful to known that you can find the length of a string by writing .length after it 
let abc = "abc";
console.log(abc.length); // 3

// ex 1
for (let line = '#'; line.length < 8; line += '#')
    console.log(line);

// fizzbuzz
// write a program that uses console.log to print all the numbers from 1 to 100 with 2 exceptions
// for numbers divisible by 3, print 'Fizz' instead of the number 
// for numbers divisible by 5, print 'Buzz' instead of the number
// for numers that are divisible by both numbers, print 'FizzBuzz'
for (i = 0; i <= 100; i ++) {
    if (i % 3 == 0 && i % 5 == 0)  {
        console.log('FizzBuzz');
    } else if (i % 3 == 0 && i % 5 != 0) {
        console.log('Fizz');
    } else if (i % 3 != 0 && i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i)
    }
}

// chessboard 
// write a program that creates a string that represents an 8x8 grid using newline characters to separate lines 
// at each position of the grid there is either a space or a '#' characters 
// the lines should form a chessboard
// define a binding size = 8 and change the program so that it works for any size outputting a grid of the given width and height 
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0;x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);









 


