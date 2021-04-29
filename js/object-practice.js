"use strict";



// var list = [];
// while (true){
//     var input = prompt("enter your new item")
//     if (input === "quit"){
//         console.log("You quit the app")
//         break;
//     } else if(input !==""){
//         list.push(input)
//         for(var i = 0; i < list.length; i++) {
//             var newList = list[i];
//         }
//         console.log(newList.indexOf(i), newList);
//     }
// }




// // to do list
// var input = prompt("What would you like to do?");
// let todos = [];
// while(input !== "quit" && input !== "q"){
//     if(input === "list"){
//         console.log("*********");
//         for(var i = 0; i < todos.length; i++){
//             console.log(i + ": " + todos[i]);
//         }
//         console.log("*********");
//     } else if(input === "new") {
//         var newTodo = prompt("What is the new todo?");
//         todos.push(newTodo);
//         console.log(newTodo + ": Added to list")
//     } else if(input === "delete"){
//         var index = parseInt(prompt("Enter the index to delete."));
//         if(!Number.isNaN(index)) {
//             var deleted = todos.splice(index, 1);
//             console.log("You deleted " + deleted[0]);
//         } else {
//             console.log("unknown index.");
//         }
//     }
//     input = prompt("What would you like to do?");
// }
// console.log("You quit the app.")


// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
//
// function filterNumbers(input) {
//     var array = [];
//     for(var i = 0; i < input.length; i++){
//         if(typeof input[i] === 'number'){
//            array.push(input[i]);
//         }
//         array.sort(function (a, b) {
//             return a - b;
//         });
//     }
//     console.log(array);
// }
//
// filterNumbers([100, "puppy" , 10000, , true, 1]);

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
]

function getOlder() {
    dogs.forEach(function (dogAge) {
       dogAge.age = dogAge.age + 1;
        console.log(dogAge);
    })

}

getOlder();

var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]


function washCars() {
    cars.forEach(function (dirtyCar) {
        if(dirtyCar.isDirty === true){
            dirtyCar.isDirty = dirtyCar.isDirty === false;
        }
    })
    console.log(cars);
}

washCars();






























