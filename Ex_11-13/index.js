"use strict";
//--------------------------------------EX-11----------------------------------------------------//
const friendsName = ["Ahmed", "Shayan", "Abdul Moiz", "Ali"];
for (const _name in friendsName) {
    console.log(friendsName[_name]);
}
//--------------------------------------EX-12----------------------------------------------------//
for (const _name in friendsName) {
    console.log(`Greetings! ${friendsName[_name]}`);
}
//--------------------------------------EX-13----------------------------------------------------//
const transportation = ["Tesla CyberTruck", "Audi R8", "Harley Davidson"];
console.log(`I would like to drive ${transportation[0]}`);
console.log(`I would like to ride ${transportation[1]}`);
console.log(`I would like to own ${transportation[2]}`);
