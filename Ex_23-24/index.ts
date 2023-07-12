//--------------------------------------EX-23----------------------------------------------------//
let color: string = 'red';
console.log("Is color == 'red'? I predict True.");
console.log(color == 'red');

let city: string = 'Islamabad';
console.log("Is city == 'Lahore'? I predict False.");
console.log(city == 'Lahore');

let country: string = 'Russia';
console.log("Is country == 'Russia'? I predict True.");
console.log(country == 'Russia');

let language: string = 'Spanish';
console.log("Is language == 'French'? I predict False.");
console.log(language == 'French');

let book: string = 'Deep Work';
console.log("Is book == 'Deep Work'? I predict True.");
console.log(book == 'Deep Work');

let sports: string = 'Cricket';
console.log("Is sports == 'Football'? I predict False.");
console.log(sports == 'Football');

let season: string = 'spring';
console.log("Is season == 'spring'? I predict True.");
console.log(season == 'spring');

let month: string = 'July';
console.log("Is month == 'June'? I predict False.");
console.log(month == 'June');

let day: string = 'Wednesday';
console.log("Is day == 'Wednesday'? I predict True.");
console.log(day == 'Wednesday');

let year: number = 2023;
console.log("Is year == '2022'? I predict False.");
console.log(year == 2022);

console.log("\n");


//--------------------------------------EX-24----------------------------------------------------//
let course: string = 'Web3';  
console.log("Is course == 'IoT'? I predict False.");
console.log(day == 'IoT');
console.log("Is course == 'Web3'? I predict True.");
console.log(course == 'Web3');
console.log("\n");

console.log("Is course == 'web3'? I predict True.");
console.log(course.toLowerCase() == 'web3');
console.log("Is course == 'Web3'? I predict True.");
console.log(course.toLowerCase() == 'Web3');
console.log("\n");



let n: number = 5;
console.log("Is n == '7? I predict False.");
console.log(n == 7);
console.log("Is n == '5? I predict True.");
console.log(n == 5);
console.log("Is n >= '7? I predict False.");
console.log(n >= 7);
console.log("Is n <= '7? I predict True.");
console.log(n <= 7);
console.log("\n");

console.log("Is n <= 9 && n == 5? I predict True.");
console.log(n <= 9 && n == 5);
console.log("Is n >= 8 && n == 5? I predict False.");
console.log(n >= 8 && n == 5);
console.log("Is n <= 9 || n == 5? I predict True.");
console.log(n <= 9 || n == 5);
console.log("Is n >= 8 || n == 2? I predict False.");
console.log(n >= 8 || n == 2);
console.log("\n");


const numArr: number[] = [1,2,3,4,5];
for( let i: number = 0; i<numArr.length; i++ ) {
    if(numArr[i] == 4 ) {
        console.log("Is numArr[i] == 4? I predict True.");
        console.log(numArr[i] == 4);
    }
}
console.log("\n");