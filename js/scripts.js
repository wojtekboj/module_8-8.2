'use strict';

var output = document.getElementById('greeter-output');
output.innerHTML = 'Click the button! And run converter!' + '<br><br>' + output.innerHTML;
var button = document.getElementById('greeter-button');

var temp;

button.addEventListener('click', function(){

    temp = window.prompt('Please enter the temperature in degrees Celsius?');

    var fahr = Math.round((temp * 1.8) + 32);
    if(isNaN(fahr)) {
        output.innerHTML = +fahr+ ' is not a number!';
    }
    if(fahr < 27) {
        output.innerHTML ='Better to run at this temperature, you re sure to be cold!';
    }
    if(fahr <= 28 && fahr >= 32) {
        output.innerHTML = 'At this temperature, the water is freezing!' + '<br>' + 'You must put on a hat and a scarf!';
    }
    if(fahr > 32 && fahr <= 55) {
        output.innerHTML = 'At this temperature, the water is in a liquid state'+ '<br>' + 'You can wear a light jacket';
    }
    if(fahr > 55 && fahr <= 104) {
        output.innerHTML = 'Is hot! Wear short pants!' + '<br>';
    }
    if(fahr > 104 && fahr < 211) {
        output.innerHTML = 'Look out because you re going to get burned!';
    }
    if(fahr >= 212 ) {
        output.innerHTML = 'At this temperature, the water is in a state of steam' + '<br>' + 'This temperature only for cooking eggs';
    }
    if(fahr >= 213 ) {
        output.innerHTML = 'You better run away at this temperature';
    }
    else {
        output.innerHTML = 'Temperature in Fahrenheit degree is ' +fahr+ '<br><br>' + output.innerHTML + '<br><br>';
    }
});

var output = document.getElementById('greeter-output2');
output.innerHTML = 'Click the button! And run converter!' + '<br><br>' + output.innerHTML;

var button = document.getElementById('greeter-button2');

var temp2;

button.addEventListener('click', function(){

    temp2 = window.prompt('Please enter the temperature in degrees Fahrenheit?');

    var fahr2 = Math.round((temp2 / 1.8) - 32);
    if(isNaN(fahr2)) {
        output.innerHTML = +fahr2+ ' is not a number!';
    }
    if(fahr2 < -2) {
        output.innerHTML ='Better to run at this temperature, you re sure to be cold!';
    }
    if(fahr2 <= -1 && fahr2 >= 0) {
        output.innerHTML = 'At this temperature, the water is freezing!' + '<br>' + 'You must put on a hat and a scarf!';
    }
    if(fahr2 > 0 && fahr2 <= 13) {
        output.innerHTML = 'At this temperature, the water is in a liquid state'+ '<br>' + 'You can wear a light jacket';
    }
    if(fahr2 > 13 && fahr2 <= 40) {
        output.innerHTML = 'Is hot! Wear short pants!' + '<br>';
    }
    if(fahr2 > 40 && fahr2 < 100) {
        output.innerHTML = 'Look out because you re going to get burned!';
    }
    if(fahr2 >= 100 ) {
        output.innerHTML = 'At this temperature, the water is in a state of steam' + '<br>' + 'This temperature only for cooking eggs';
    }
    if(fahr2 >= 101 ) {
        output.innerHTML = 'You better run away at this temperature';
    }
    else {
        output.innerHTML = 'Temperature in Celsius degree is ' +fahr2+ '<br><br>' + output.innerHTML + '<br><br>';
    }
});