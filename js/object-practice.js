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

