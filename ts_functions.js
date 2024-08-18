function square(num) {
    return num * num;
}
function greet(person) {
    return "hi there, ".concat(person);
}
square(3);
greet("piya");
var doSomething = function (person, age, isFunny) { };
doSomething("ChickenFace", 78, true);
// default value 
function greet_me(person) {
    if (person === void 0) { person = "test"; }
    return "hi there, ".concat(person);
}
greet_me();
greet_me("piya");
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    return color.toUpperCase();
});
//  returning void
function printTwice(msg) {
    console.log(msg);
}
function testFunc(msg) {
    console.log(msg);
}
// return type - Never 
function testReturnNever(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true)
        console.log("GAME LOOP RUNNING");
}
function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
}
function isLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
        return true;
    return false;
}
console.log(isLeapYear(2012));
console.log(isLeapYear(2015));



