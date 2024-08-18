var dog = {
    name: "Elton",
    breed: "Golden Retriever",
    age: 0.5
};
// function with object as a parameter
function printName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var coordinate = { x: 34, y: 2 };
// function with return type is specified
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// excess properties
printName({ firstName: "testName", lastName: "testLName" });
var singer = { firstName: "testName", lastName: "testLName", age: 456, isAlive: true };
printName(singer);
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 2345;
function calculatePayout(song) {
    return song.numstreams * 0.233;
}
function printSong(song) {
    return "".concat(song.title, "-").concat(song.artist);
}
var mySong = {
    title: "Unchained melody",
    artist: "Test artist",
    numstreams: 234567,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
console.log(calculatePayout(mySong));
console.log(printSong(mySong));
var coordinates = { x: 1, y: 3 };
var user = {
    id: 12345,
    username: "catgirl"
};
console.log(user.id);
var happyFace = {
    radius: 4,
    color: "Yellow",
};
var christy = {
    numLives: 7,
    breed: "Husky",
    age: 9
};
var movie = {
    title: "Movie title",
    director: "movie director",
    releaseYear: 2020,
    boxOffice: {
        budget: 9887777,
        grossUS: 279111,
        grossWorldwide: 311999999
    }
};
function getProfit(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
console.log(getProfit(movie));
