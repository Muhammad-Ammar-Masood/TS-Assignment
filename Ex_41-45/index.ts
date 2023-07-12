//--------------------------------------EX-41----------------------------------------------------//
const magicians: string[] = ["David Copperfield", "David Blain", "Penn and Teller", "Derren Brown"];
function show_magicians(magArr: string[]): void {
    for( const i in magArr ) {
        console.log(magArr[i]);
    }
}

show_magicians(magicians);

console.log("\n");




//--------------------------------------EX-42----------------------------------------------------//
const great_magicians: string[] = [];
function make_great(greatMag: string[]): void {
    for( let i: number = 0; i<greatMag.length; i++ ) {
        // console.log(`Great ${greatMag[i]}`);
        great_magicians[i] = `Great ${greatMag[i]}`;
    }
}

make_great(magicians);
show_magicians(great_magicians);


console.log("\n");



//--------------------------------------EX-43----------------------------------------------------//
console.log("Orginal Names:");
show_magicians(magicians);
console.log("\n");
console.log("Modified Names:");
show_magicians(great_magicians);


console.log("\n");



//--------------------------------------EX-44----------------------------------------------------//
function sandwich(items: string[]): void {
    console.log("Summary of Sandwich: \nItems ordered:");
    for ( const i in items ) {
        console.log(items[i]);
    }
    console.log("\n");
}

sandwich(["bread", "Salad", "Mayo", "Egg"]);
sandwich(["beef", "lettuce", "tomato"]);
sandwich(["cheese", "onion", "ketchup", "Olives"]);


console.log("\n");



//--------------------------------------EX-45----------------------------------------------------//
function car(manufacturer: string, modelName: string, color?: string): {} {
    return {
        manufacturer: manufacturer,
        modelName: modelName,
        color: color
    }
}

console.log(car("Tesla", "Model S", "black"));