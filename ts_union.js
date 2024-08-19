var age = 24;
age = 27;
age = "23";
var coordinates = { x: 2, y: 4 };
coordinates = { lat: 321.33, long: 43.33 };
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
printAge(25);
printAge("45");
function calculateTax(price, tax) {
    if (typeof price === 'string') {
        price.replace("$", "");
        return parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax(45, 0.80));
console.log(calculateTax("$45.67", 5));
