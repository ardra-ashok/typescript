const activeUsers: string[]=[];
activeUsers.push("Tony")

const ageList: number[] = [45,56,13];
ageList[0] = 99;
// ageList[0] = "abc";

// array syntax
let names: Array<string> = ["hello","world"];
let ages: Array<number> = [24,32,18,89]

// const bools: Array<boolean> =[]
const bools: boolean[] = []

type Point_1 = {
    x:number,
    y:number
}

const coords: Point_1[]=[];
coords.push({x:23,y:7})
// coords.push({x:23,y:"8"})

// multidimensional array
const board: string[][]=[
    ["X","0","X"],
    ["X","0","X"],
    ["X","0","X"],
]

// Array excercise 
let ages_arr: number[] = []

let gameBoard: string[][] = [];

type Product={
    name: string,
    price: number
}

const product: Product[]=[];
product.push({name:"paste",price:11.5})
product.push({name:"dates",price:21.5})

function getTotal(product:Product[]):number{
    let total = 0;
    for(let prd of product){
        total += prd.price;
    }
    return total;
}

console.log(getTotal(product))
