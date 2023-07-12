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

