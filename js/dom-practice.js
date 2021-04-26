'use strict';
//
// var welcome = document.querySelector('#welcome-btn');
//
// // var changeColor = function () {
// //     welcome.style.color = 'red'
// // }
// //
// // document.querySelector('#welcome-btn').addEventListener('click', changeColor);
//
//
//
// var changeColor = function (event) {
//     document.querySelector('h1').style.color = 'red';
// }
//
// welcome.addEventListener('click', changeColor);
//
//
//
// var cancelColor = function (event) {
//     welcome.removeEventListener('click', changeColor);
// }
//
// var cancel = document.querySelector('#cancel-btn');
// cancel.addEventListener('click', cancelColor);


var randomColor = function () {
    var r = Math.floor(Math.random()* 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random()* 256);
    return (`rgb(${r},${g},${b})`);
}



var changeColor = function () {
    document.querySelector('h1').style.backgroundColor = randomColor();
}

var change = document.getElementById('welcome-btn');
change.addEventListener('click', changeColor);

var removeColor = function () {
    change.removeEventListener('click', changeColor);
    document.querySelector('h1').style.color = 'black';
}

var remove = document.getElementById('cancel-btn');
remove.addEventListener('click', removeColor);

