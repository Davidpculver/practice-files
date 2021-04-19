// "use strict";
//
// function returnTwo() {
//     return 2;
// }
//
// console.log(returnTwo());
//
// function sayHowdy() {
//     console.log("Howdy!");
// }
// sayHowdy();
//
// function returnName(name) {
//     return name;
// }
//
// console.log(returnName("david"));
//
// function addThree(number) {
//     return parseFloat(number) + 3;
// }
//
// console.log(addThree(3));
//
// function sayString(str) {
//     return str;
// }
//
// console.log(sayString("codeup"));
//
// var yourNumber = parseFloat(prompt("Please enter a number."));
// function isMultipleOfFive(number) {
//     return (number % 5 === 0) ? alert("Your number is a multiple of 5") : alert("no its not");
// }
//
// console.log(isMultipleOfFive(yourNumber));
//
// function isMultipleOfThreeAndFive(input) {
//     return (parseFloat(input) % 5 === 0 && parseFloat(input) % 3 === 0);
// }
//
// console.log(isMultipleOfThreeAndFive("15"));

// function isMultipleOf(target, n) {
//     return target % n === 0;
// }
//
// console.log(isMultipleOf("Pizza", 2));

// function isVowel(letter) {
//     switch (letter.toLowerCase()) {
//         case "a":
//             return "Yes, " + letter + " is a vowel.";
//             break;
//         case "e":
//             return "Yes, " + letter + " is a vowel.";
//             break;
//         case "i":
//             return "Yes, " + letter + " is a vowel.";
//             break;
//         case "o":
//             return "Yes, " + letter + " is a vowel.";
//             break;
//         case "u":
//             return "Yes, " + letter + " is a vowel.";
//             break;
//         default:
//             return "No, " + letter + " is not a vowel.";
//             break;
//     }
// }
//
// console.log(isVowel("E"));

// function isConsonant(letter){
//     var lowerCase = letter.toLowerCase()
//     return (lowerCase === "a" || lowerCase === "e" || lowerCase === "i" || lowerCase === "o" || lowerCase === "u") ? "Your letter is not a consonant" : "Your letter is a consonant."
// }
//
// console.log(isConsonant("U"));
//
// function hasWhiteSpace(str) {
//     if (str.indexOf(' ') >= 0){
//         return "This has spaces.";
//     } else {
//         return "no space";
//     }
// }
//
// console.log(hasWhiteSpace("john doe"));

// function invertSign(number) {
//     return (typeof number === "number") ? number * -1 : false
// }
//
// console.log(invertSign(true));

// function first(str) {
//     return str.charAt(0);
// }
//
// console.log(first("23"));
//
// function last(str) {
//     return str.charAt(str.length - 1);
// }
//
// console.log(last("pizza"));

// function rest(input){
//     return input.substr(1);
// }
//
// console.log(rest("pizzza"));

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("pizza"));

// function count(str){
//     return str.length;
// }
//
// console.log(count("pizza"));

// function remainder(number, divisor) {
//     return number % divisor;
// }
//
// console.log(remainder(15, 11));

// function lastLetter(input) {
//     if (input.charAt(input.length-1) === 'a'){
//         return true;
//     } else{
//         return false;
//     }
// }
//
// console.log(lastLetter("a taco pizza"));


// function countLeadingSpaces(str) {
//     return(str.match(/^(\s*)/)[1].length);
// }
//
// console.log(countLeadingSpaces(" not sure how this works"))

// function willLoginUser(username, password, age, admin) {
//     return ((admin || age >= 18) && password !== username);
// }
//
// console.log(willLoginUser("pizza", "pizzas", 18, false));


// function doMath(operator, a, b) {
//     switch (operator) {
//         case "+":
//             return a+b;
//             break;
//         case "-":
//             return a-b;
//             break;
//         case "*":
//             return a*b;
//             break;
//         case "/":
//             return a/b;
//             break
//         default:
//             return "sorry";
//     }
// }
//
// console.log(doMath("-", 300, 75));

// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.
// function second(input){
//     return input[1];
// }
//
// console.log(second(["order", 'pizza', 'now']));



// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.
// function third(input) {
//     return input[2];
// }
//
//
//
// // Exercise 53
// // Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
// function forth(input) {
//     return input[3];
// }
//
//
//
// // Exercise 54
// // Write a function definition named last that takes in sequence and returns the last value of
// function last(input) {
//     return input[input.length-1];
// }

// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.
// function secondToLast(input) {
//     return input[input.length-2];
// }
//
//
// // Exercise 56
// // Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.
// function thirdToLast(input) {
//     return input[input.length-3];
// }

// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array
// function firstAndSecond(input) {
//     return input.slice(0, 2);
// }


// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array
// function firstAndLast(input) {
//     return [input[0], input[input.length-1]];
// }
// console.log(firstAndLast([1, 2, 3, 4, 5]))

// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.
// function firstToLast(input) {
//     var firstItem = input.shift();
//     return [input, input.push(firstItem)];
// }
//
// console.log(firstToLast([1, 2, 3, 4]))

// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.



// var newArray = [];
// function allIndexesOf(array, value) {
//     for(var i = 0; i < array.length; i++){
//         if(value === array[i]){
//           newArray.push(i);
//         }
//     } console.log(newArray)
// }
//
// allIndexesOf(['apple', 'banana', 'orange', 'apple', 'pineapple'], 'apple')
//
// function removeAll(array, value) {
//     for(var i = 0; i < array.length; i++){
//         if(array[i] === value){
//             array.splice(i, 1);
//             i--;
//         }
//     } console.log(array);
// }
//
// removeAll(["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"], 'scorpion');
//
// function randomIntBetween(x, y) {
//     x = Math.ceil(x);
//     y = Math.floor(y);
//     return Math.floor(Math.random() * (y - x + 1)) + x;
// }
//
// console.log(randomIntBetween(11, 100))

// function coinFlip(){
//     var coin = Math.round(Math.random());
//     if(coin === 0){
//         console.log("Tails")
//     } else {
//         console.log("Heads")
//     }
// }
//
// coinFlip();


// function twoDice() {
//     var diceOne = Math.floor(Math.random() * 6) +1;
//     var diceTwo = Math.floor(Math.random() * 6) + 1;
//     console.log("Dice one " + diceOne + " plus dice two "  + diceTwo + " = " + (diceOne + diceTwo));
// }
// twoDice();
//
// function twentySidedDie() {
//     return Math.floor(Math.random() * 20) + 1;
// }
//
// console.log(twentySidedDie());

function twelveSidedDie() {
    return Math.floor(Math.random() * 12) + 1;
}
//
// console.log(twelveSidedDie());

function tetrahedron() {
    return Math.floor(Math.random() * 4) + 1;
}
//
// console.log(tetrahedron());

function rollDie() {
    return Math.floor(Math.random() * 6 ) + 1;
}


// function listOfRolls(num) {
//     var rolls = [];
//     for(var i = 0; i < num; i++){
//         rolls.push(rollDie());
//     }
//     console.log(rolls);
// }
//
// listOfRolls(10);


function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
    var rolled = [];
    for(var i = 0; i < numberOfRolls; i++){
        rolled.push(diceFunction);
    }
    console.log(rolled);
}

listOfRollsFromDieFunc(3, rollDie());