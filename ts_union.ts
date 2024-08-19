let age: number | string | boolean = 24
age = 27
age = "23"

type Point = {
 x: number;
 y: number;
}

type loc = {
 lat: number;
 long: number;
}

let coordinates: Point | loc = { x: 2, y: 4 }
coordinates = { lat: 321.33, long: 43.33 } 

function printAge(age: number| string){
 console.log(`You are ${age} years old`);
 
}

printAge(25)
printAge("45")

function calculateTax(price: number | string, tax: number) {
 if (typeof price === 'string') {
  price.replace("$", "")
  return parseFloat(price.replace("$",""))
 }
 return price * tax;
}

console.log(calculateTax(45, 0.80));
console.log(calculateTax("$45.67",5));

//  Arrays - any type
const nums: number[] = [1, 2, 3, 4, 5, 6]
const stuff: any[] = [1, 2, 4, 5, 6, true, "asdf", {}]


// a variable is assigned to single number or string Array
const stuffs: number | string[] = 4;
const testArr: number | string[] = ["str1", "str2", "str3"];

// a variable is assigned to either a number array or string Array -union type
let test_arr: (number | string)[] = [1, 3, 5];
const test_arry: number[] | string[] = ['abcd', 'abd', 'edc'];
test_arr = ["abcd","abd", "edc"]


const coords: (Point | loc)[] = [];
coords.push({ lat: 321.34, long: 23.45 })
coords.push({ x: 23, y: "sd" })

// Literal types
let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Sad";
mood = "Happy";
// mood = "angry"

// Excercise

let highScore: number | boolean = true;

let stuff_2: (number | string)[] = [1, 2, 45, 5];

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
 name: string;
 age: number;
 sport: "ski" | "snowboard";
 level: SkillLevel;
}

type rgb = {
 r: number;
 g: number;
 b: number;
}

type hsl = {
 h: number;
 s: number;
 l: number;
}

const colors: (rgb | hsl)[] = [];

const greet = (person: string | string[]): void => {
 if (typeof === 'string')
  console.log(`Hello ${ person }`);
 else {
  for (let p of person)
   console.log(`Hello ${p}`);
 }
 
}
