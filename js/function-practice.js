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





























