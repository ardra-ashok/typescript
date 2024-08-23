// Basic Interface
var pt = {
    x: 123,
    y: 234
};
var names = {
    firstName: "Piya",
    lastName: "asok",
    id: 123,
    sayHi: function () {
        return "Hello!";
    },
};
names.firstName = "Test";
var shoes = {
    name: "Blue Shoes",
    price: 200,
    applyDiscount: function (amount) {
        return this.price * (1 - amount);
    }
};
console.log(shoes.applyDiscount(0.4));
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Golden Retriever",
    bark: function () {
        return "WOOF WOOF";
    }
};
