//--------------------------------------EX-36----------------------------------------------------//
function make_shirt(size: string, message: string): void {
    console.log(`The size of the shirt is '${size}' and the message to be printed on shirt is '${message}'`);
}

make_shirt("medium", "Coding is fun");

console.log("\n");




//--------------------------------------EX-37----------------------------------------------------//
function make_shirt2(size: string = "large", message: string = "I love Typescript"): void {
    console.log(`The size of the shirt is '${size}' and the message to be printed on shirt is '${message}'`);
}

make_shirt2();
make_shirt2("medium");
make_shirt2("small", "Javascript is awesome");

console.log("\n");



//--------------------------------------EX-38----------------------------------------------------//
function decribe_city( _name: string, _country: string = "Pakistan"): void {
    console.log(`${_name} is in ${_country}`);
}

decribe_city("Islamabad");
decribe_city("Lahore");
decribe_city("Sydney", "Australia");

console.log("\n");



//--------------------------------------EX-39----------------------------------------------------//
function city_country( _name: string, _country: string): string {
    return `${_name}, ${_country}`;
}

console.log(city_country("Quetta", "Pakistan"));
console.log(city_country("London", "England"));
console.log(city_country("Paris", "France"));

console.log("\n");



//--------------------------------------EX-40----------------------------------------------------//
function make_album(artist_name: string, album_title: string, tracks?: number): {} {
    return {
        artist_name: artist_name,
        album_title: album_title,
        tracks: tracks
    }
}

console.log(make_album("David", "Songs"));
console.log(make_album("Tom", "New Style", 10));
console.log(make_album("Harry", "Strange", 25));