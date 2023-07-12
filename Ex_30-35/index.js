"use strict";
//--------------------------------------EX-30----------------------------------------------------//
const userNames = ["Admin", "Ali", "Ahmed", "Yasir", "Umar"];
for (const user in userNames) {
    if (userNames[user] === "Admin")
        console.log(`Hello ${userNames[user]}, would you like to see a status report?`);
    else
        console.log(`Hello ${userNames[user]}, thank you for logging in again.`);
}
console.log("\n");
//--------------------------------------EX-31----------------------------------------------------//
const userNames2 = [];
if (userNames2.length == 0)
    console.log("We need to find some users");
console.log("\n");
//--------------------------------------EX-32----------------------------------------------------//
const current_users = ["Ali23", "Saleem68", "Ali12", "Yasir78", "Usman11"];
const new_users = ["Ali23", "Jawad7", "Yasir78", "Hassan65", "Kashif44"];
let unique = true;
for (let i = 0; i < new_users.length; i++) {
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            unique = false;
            break;
        }
    }
    if (!unique)
        console.log(`User name '${new_users[i]}' already exists. You have to enter a new user name.`);
    else
        console.log(`Username '${new_users[i]}' is availale`);
    unique = true;
}
console.log("\n");
//--------------------------------------EX-33----------------------------------------------------//
const ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const i in ordinalNum) {
    if (ordinalNum[i] <= 3) {
        if (ordinalNum[i] == 1) {
            console.log(ordinalNum[i] + 'st');
        }
        if (ordinalNum[i] == 2) {
            console.log(ordinalNum[i] + 'nd');
        }
        if (ordinalNum[i] == 3) {
            console.log(ordinalNum[i] + 'rd');
        }
    }
    else
        console.log(ordinalNum[i] + "th");
}
console.log("\n");
//--------------------------------------EX-34----------------------------------------------------//
const fav_pizzas = ["Cheesy garlic", "Crown crust", "BBQ chicken"];
for (const i in fav_pizzas) {
    if (fav_pizzas[i] == "Cheesy garlic")
        console.log(`I like ${fav_pizzas[i]} pizza`);
    if (fav_pizzas[i] == "Crown crust")
        console.log(`${fav_pizzas[i]} pizza is the best in the town`);
    if (fav_pizzas[i] == "BBQ chicken")
        console.log(`I love ${fav_pizzas[i]} pizza`);
}
console.log("I love pizza. I love the flavors, textures, and endless possibilities.I'm always up for trying new toppings and combinations, and I love experimenting with different pizza styles.");
console.log("\n");
//--------------------------------------EX-35----------------------------------------------------//
const animals = ["lion", "tiger", "cheetah"];
for (const i in animals) {
    if (animals[i] == "lion")
        console.log(`${animals[0]} are also known as king of the jungle`);
    if (animals[i] == "tiger")
        console.log(`${animals[1]} are very brave animal`);
    if (animals[i] == "cheetah")
        console.log(`${animals[2]} are the fastest animal`);
}
console.log("These all animals are predators and belong to same family.");
