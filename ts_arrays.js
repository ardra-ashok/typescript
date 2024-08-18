var activeUsers = [];
activeUsers.push("Tony");
var ageList = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = "abc";
// array syntax
var names = ["hello", "world"];
var ages = [24, 32, 18, 89];
// const bools: Array<boolean> =[]
var bools = [];
var coords = [];
coords.push({ x: 23, y: 7 });
// coords.push({x:23,y:"8"})
// multidimensional array
var board = [
    ["X", "0", "X"],
    ["X", "0", "X"],
    ["X", "0", "X"],
];
// Array excercise 
var ages_arr = [];
var gameBoard = [];
var product = [];
product.push({ name: "paste", price: 11.5 });
product.push({ name: "dates", price: 21.5 });
function getTotal(product) {
    var total = 0;
    for (var _i = 0, product_1 = product; _i < product_1.length; _i++) {
        var prd = product_1[_i];
        total += prd.price;
    }
    return total;
}
console.log(getTotal(product));
