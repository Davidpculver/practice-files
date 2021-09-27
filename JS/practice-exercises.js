"use strict"

// var number = 1;
// var counter = 0
// while (counter < 16){
//     number = number * 2;
//     console.log(number);
//     counter++;
// }

// var priceOfItem = parseFloat(prompt("Enter the price of your first item."));
// alert("The price of your item was " + priceOfItem);
// // create accumulator variable
// var totalCost = priceOfItem;
// // without userInput, infinate loop since parsefloat, never able to return STOP
// var userInput = "";
// // create a sentinel value
// while(userInput !== "STOP") {
//     userInput = (prompt("Enter the price of your next item. \r\n\ Enter STOP when you are done."));
//     if(userInput === "STOP"){
//         alert("Your final price is: $" + totalCost.toFixed(2))
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost = totalCost + priceOfItem;
//         alert("Your total is now " + totalCost.toFixed(2));
//     }
// }

// var priceOfItem = parseFloat(prompt("Enter the price of your first item."));
// var totalCost = priceOfItem;
// var moreItems = true;
// while(moreItems === true){
//     moreItems = confirm("Do you have other items to add?");
//     if(moreItems === true){
//         priceOfItem = parseFloat(prompt("Please enter the price of your next item."));
//         totalCost = totalCost + priceOfItem;
//         alert("Your new total is $" + totalCost);
//     } else {
//         alert("Your final total is $" + totalCost);
//     }
//
// }

function removeVowels(str) {
    let splitStr = str.split('');
    let noVowels = [];
    for(let i = 0; i < str.length; i++){
        if(splitStr[i].toLowerCase() != 'a' && splitStr[i].toLowerCase() != 'e' && splitStr[i].toLowerCase() != 'i' && splitStr[i].toLowerCase() != 'o' && splitStr[i].toLowerCase() != 'u') {
            noVowels.push(splitStr[i]);
        }
    }
    return noVowels.join('');
}

console.log(removeVowels("This is a test and only a test."));