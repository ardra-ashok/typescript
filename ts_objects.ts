const dog = {
  name: "Elton",
  breed: "Golden Retriever",
  age: 0.5
};

// function with object as a parameter

function printName(person: { firstName: string; lastName: string }): void {
  console.log(`${person.firstName} ${person.lastName}`);
}

let coordinate: {x: number; y:number} = {x:34,y:2}

// function with return type is specified
function randomCoordinate(): {x:number, y:number}{
    return {x: Math.random(), y: Math.random()}
}

// excess properties
printName({firstName: "testName", lastName: "testLName"})

const singer = {firstName: "testName", lastName: "testLName", age:456, isAlive: true}
printName(singer)

// type Alias

type Point = {
    x: number;
    y: number;
};

function doublePoint(point: Point):Point{
    return { x: point.x*2,y:point.y*2}
}

type myNum = number;
let age: myNum = 2345;

type Song = {
    title: string;
    artist: string;
    numstreams: number;
    credits: {
        producer: string;
        writer: string;
    }
}

function calculatePayout(song: Song): number{
    return song.numstreams * 0.233;
}

function printSong(song: Song){
    return `${song.title}-${song.artist}`;
    
}

const mySong: Song = {
    title: "Unchained melody",
    artist: "Test artist",
    numstreams: 234567,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

console.log(calculatePayout(mySong))
console.log(printSong(mySong))

type Coordinate= {
    x: number;
    y: number;
    z?: number;
};

const coordinates: Coordinate = {x:1,y:3};

// Read only types  

type User = {
    readonly id: number;
    username: string;
}
const user: User = {
    id: 12345,
    username: "catgirl"
}

console.log(user.id);

// Intersetion types

type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "Yellow",
}

// Intersection Types 
type Cat = {
    numLives: number;
}
type Dog = {
    breed: string;
}
type CatDog = Cat & Dog & {
    age: number;
}

const christy: CatDog = {
    numLives:7,
    breed: "Husky",
    age: 9
}

//  Objects Example 
type Movie ={
    readonly title: string,
    originalTitle?: string,
    director:string,
    releaseYear:number,
    boxOffice: {
        budget:number,
        grossUS:number,
        grossWorldwide:number
    }
}

const movie:Movie = {
    title: "Movie title",
    director: "movie director",
    releaseYear: 2020,
    boxOffice: {
        budget: 9887777,
        grossUS: 279111,
        grossWorldwide:311999999
    }
}

function getProfit(movie:Movie):number{
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget; 
}
// function getProfit({boxOffice:{grossWorldwide,budget}}:Movie):number{
//     return grossWorldwide - budget;
// }
console.log(getProfit(movie));
