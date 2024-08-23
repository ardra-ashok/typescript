// Basic Interface

interface Point{
    x: number;
    y: number;
}

const pt: Point ={
    x: 123,
    y: 234
}

// Readonly and optional , Interface Methods
interface Person{
    readonly id: number;
    firstName: string;
    lastName: string;
    nickName?: string;
    // sayHi: ()=>  string;
    sayHi(): string;


}

const names: Person ={
    firstName: "Piya",
    lastName: "asok",
    id: 123,
    sayHi: () => {
        return "Hello!";
    },
}

names.firstName = "Test"

// Interface Method Parameters

interface Product{
    name: string;
    price: number;
    applyDiscount(discount: number):number;
}

const shoes: Product = {
    name: "Blue Shoes",
    price: 200,
    applyDiscount(amount: number){
        return this.price * (1-amount)
    }
}

console.log(shoes.applyDiscount(0.4));

// Reopening interface

interface Dog{
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Golden Retriever",
    bark(){
        return "WOOF WOOF";
    }
}

// Extending Interfaces
interface ServiceDog extends Dog{
    job: "drug sniffer" | "bomb" | "guide dog";
} 

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark(){
        return "Bark!"
    },
    job: "guide dog"
}

// Multiple Interferences

interface Person_ {
    name: string;
}
interface Employee{
    readonly id: number,
    email: string
}
interface Engineer extends Person_, Employee {
    level: string,
    languages: string[]
}

const Pierrie : Engineer = {
    name: "Pierrie Samuel",
    id: 23,
    email: "pierrie@gmail.com",
    level: "senior",
    languages: ["JS","Python"]
}

// Types Aliases vs Interfaces

