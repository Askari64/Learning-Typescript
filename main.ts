//tsc filename is used to transpile .ts file to .js file as we have main.js transpiled from main.ts file i.e translated

export{} // Added to treat this file as a module so the error message go away when "message" variable is declared in main.js, 
//typescript thinks that the variable is redeclared

let message: string = "Hello World"; // here let message: string = "Hello World"; means that variable message is of type string and storing string value "Hello World"
console.log(message);

let sum: number; //This means variable sum is of type number. It is declared but not initialised
const title: string = "Learning Typescript" // Title is of type string and initialised
// let declarations may not necessarily be initialised but const declarations must always be initialised.
// a variable can not be redeclared but can be redeclared in a different scope

sum = 25;
console.log(sum);
sum=14;
console.log(sum);

// The variable sum of type number (line 9) was not initialised upon declaration so we initialised it to 25 (line 14) and reinitialised to 14 (line 16)

let x: number = 8;
let y: number = 38;
let z: string = "Good Morning"
sum = x+y;
console.log(sum);

let anyType: any;
anyType = sum + z;
console.log(anyType);

/*We declared variables x and y of type number and variable z of type string
we did sum = x+y without problem because sum is of type number too.
We can not do sum += z afterwards because sum is of type number and z is of type string
We declared a variable anyType and declared it of type any means any type of data can be stored in it. henceforth anyType = sum + z
works and it stores 46GoodMorning */

let learningTypescript : boolean = true;
learningTypescript = false;

let name: string = "Askari";
let age: number = 20;
let sentence: string = `My name is ${name} and I am ${age} years old.
I'm learning Typescript`

console.log(sentence);

/* In variable sentence of type string we have used string interpolation and it works well*/
