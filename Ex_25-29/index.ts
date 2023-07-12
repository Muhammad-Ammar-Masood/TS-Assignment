//--------------------------------------EX-25----------------------------------------------------//
let alien_color1: string = "green";
if( alien_color1 === "green") 
    console.log("Player just earned 5 points")

let alien_color2: string =  "yellow";
if( alien_color2 === "red" ) 



console.log("\n");


//--------------------------------------EX-26----------------------------------------------------//
let alien_color3: string = "green";
if( alien_color3 === "green") 
    console.log("Player just earned 5 points for shooting the alien");

else
    console.log("Player just earned 10 points");

let alien_color4: string = "red";
if( alien_color4 === "green") 
    console.log("Player just earned 5 points for shooting the alien");

else
    console.log("Player just earned 10 points");




//--------------------------------------EX-27----------------------------------------------------//
let alien_color5: string = "green";
if (alien_color5 === "green") 
    console.log("Player just earned 5");
else if(alien_color5 === "yellow") 
    console.log("Player just earned 10 points");
else if(alien_color5 === "red")
    console.log("Player just earned 15 points");

let alien_color6: string = "yellow";
if (alien_color6 === "green") 
    console.log("Player just earned 5");
else if(alien_color6 === "yellow") 
    console.log("Player just earned 10 points");
else if(alien_color6 === "red")
    console.log("Player just earned 15 points");
    
let alien_color7: string = "red";
if (alien_color7 === "green") 
    console.log("Player just earned 5");
else if(alien_color7 === "yellow") 
    console.log("Player just earned 10 points");
else if(alien_color7 === "red")
    console.log("Player just earned 15 points");

console.log("\n");




//--------------------------------------EX-28----------------------------------------------------//
let person_age: number = 20;

if( person_age < 2 ) 
    console.log("The Person is a baby");

else if( person_age >=2 && person_age < 4 )
        console.log("The Person is a toddler");

else if( person_age >=4 && person_age < 13 )
    console.log("The Person is a kid");

else if( person_age >= 13 && person_age < 20 ) 
    console.log("The Person is a teenager");

else if ( person_age >= 20 && person_age < 60 )
        console.log("The Person is a adult");

else if ( person_age >=65 ) 
    console.log("The Person is a elder");


console.log("\n");


//--------------------------------------EX-29----------------------------------------------------//
const favorite_fruits: string[] = ["mango", "apricot", "orange"]
for( const i in favorite_fruits) {
    if ( favorite_fruits[i] == "banana")
        console.log(`You really like ${favorite_fruits[i]}!`);
    if ( favorite_fruits[i] == "mango")
        console.log(`You really like ${favorite_fruits[i]}!`);
    if ( favorite_fruits[i] == "pineapple")
        console.log(`You really like ${favorite_fruits[i]}!`);
    if ( favorite_fruits[i] == "grapes")
        console.log(`You really like ${favorite_fruits[i]}!`);
    if ( favorite_fruits[i] == "orange")
        console.log(`You really like ${favorite_fruits[i]}!`);
}

