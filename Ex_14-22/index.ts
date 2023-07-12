//--------------------------------------EX-14----------------------------------------------------//
const guest_list: string[] = ["Ali", "Usman", "Shahid"];
for (const guest in guest_list) {
    console.log(`Dear ${guest_list[guest]}! you are invited to a delightful dinner.`);
}
console.log("\n");

//--------------------------------------EX-15----------------------------------------------------//
console.log(`${guest_list[2]} could not make the dinner`);
guest_list[2] = "Yasir";
console.log("\n");
console.log("New List of Guests:");
for (const guest in guest_list) {
    console.log(`Dear ${guest_list[guest]}! you are invited to a delightful dinner.`);
}
console.log("\n");



//--------------------------------------EX-16----------------------------------------------------//
console.log("Wow! I found a bigger dinner table!\n");
guest_list.unshift("Zaid");
guest_list.splice(3,0, "Saleem");
guest_list.push("Aamir");
console.log("New List of Guests:");
for (const guest in guest_list) {
    console.log(`Dear ${guest_list[guest]}! you are invited to a delightful dinner.`);
}
console.log("\n");



//--------------------------------------EX-17----------------------------------------------------//
console.log("Unfortunately! I can inivte only two people for dinner.\n")
for(let i:number = 0; i<4; i++) {
    console.log(`Dear ${guest_list.pop()}! Sorry I cannot invite you to dinner.`);
}
console.log("\n");

console.log("New List of Guests:");
for (const guest in guest_list) {
    console.log(`Dear ${guest_list[guest]}! you are still invited to dinner.`);
}
console.log("\n");

for(let i:number = 0; i<=guest_list.length; i++) {
    guest_list.pop();
}

console.log(guest_list); //EMPTY ARRAY
console.log("\n");



//--------------------------------------EX-18----------------------------------------------------//
const fav_places: string[] = ["England", "Australia", "China", "USA", "Spain"];
console.log("Original Order:");
for (const place in fav_places) {
    console.log(fav_places[place]);
}
console.log("\n");


console.log("Alphabetical Order:");
fav_places.sort();
for (const place in fav_places) {
    console.log(fav_places[place]);
}
console.log("\n");


console.log("Reverse Order:");
fav_places.reverse();
for (const place in fav_places) {
    console.log(fav_places[place]);
}
console.log("\n");



//--------------------------------------EX-19----------------------------------------------------//
console.log("Number of persons invited to Dinner: ", guest_list.length); // 0 becuase Array is empty in previous Ex-17
console.log("\n");



//--------------------------------------EX-20----------------------------------------------------//
const citiesArr: string[] = ["Lahore", "Karachi", "Peshawar", "Quetta", "Faislabad" ];
console.log(citiesArr);
console.log("\n");


//--------------------------------------EX-21----------------------------------------------------//
const countries_obj: {cName: string, capital: string, language: string, cities: string[]} =  {
    cName: "Pakistan",
    capital: "Islamabad",
    language: "Urdu",  
    cities: citiesArr
}
console.log(countries_obj);
console.log("\n");


//--------------------------------------EX-22----------------------------------------------------//

//ERROR


