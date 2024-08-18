console.log("test");
console.log(123);

var movieTitle: string = "Love Rosie";
movieTitle = "Test Movie";
console.log(movieTitle.toUpperCase());

var num_1: number = 9;
num_1 += 9;

var flag: boolean = false;
flag = true;

var nothing: null = null;
var foo: undefined = undefined;

// Type inference
var tvShow = "test show";
tvShow = "The other show";
tvShow = false;

var isFunny = false;
isFunny = true;
isFunny = "asd";

// Any variable
var thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

console.log(thing);

const movies = ["Arrival", "the thing", "test"];
var foundMovie: string;
for (let movie of movies) {
  if (movie === "Amadeus") foundMovie = "Amadeus";
}
