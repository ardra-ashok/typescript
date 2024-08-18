function square(num: number) {
  return num * num;
}

function greet(person: string): string {
  return `hi there, ${person}`;
}

square(3);
greet("piya");

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("ChickenFace", 78, true);

// default value
function greet_me(person: string = "test"): string {
  return `hi there, ${person}`;
}

greet_me();
greet_me("piya");

const colors = ["red", "orange", "yellow"];
colors.map(color => {
  return color.toUpperCase();
});

//  returning void
function printTwice(msg: string) {
  console.log(msg);
}

function testFunc(msg: string) {
  console.log(msg);
}

// return type - Never
function testReturnNever(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) console.log("GAME LOOP RUNNING");
}

function twoFer(name: string = "you") {
  return `One for ${name}, one for me`;
}

function isLeapYear(year: number): boolean {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) return true;
  return false;
}
