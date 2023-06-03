"use strict";
//tsc filename is used to transpile .ts file to .js file as we have main.js transpiled from main.ts file i.e translated
Object.defineProperty(exports, "__esModule", { value: true });
//typescript thinks that the variable is redeclared
var message = "Hello World"; // here let message: string = "Hello World"; means that variable message is of type string and storing string value "Hello World"
console.log(message);
var sum; //This means variable sum is of type number. It is declared but not initialised
var title = "Learning Typescript"; // Title is of type string and initialised
// let declarations may not necessarily be initialised but const declarations must always be initialised.
// a variable can not be redeclared but can be redeclared in a different scope
sum = 25;
console.log(sum);
sum = 14;
console.log(sum);
// The variable sum of type number (line 9) was not initialised upon declaration so we initialised it to 25 (line 14) and reinitialised to 14 (line 16)
var x = 8;
var y = 38;
var z = "Good Morning";
sum = x + y;
console.log(sum);
var anyType;
anyType = sum + z;
console.log(anyType);
/*We declared variables x and y of type number and variable z of type string
we did sum = x+y without problem because sum is of type number too.
We can not do sum += z afterwards because sum is of type number and z is of type string
We declared a variable anyType and declared it of type any means any type of data can be stored in it. henceforth anyType = sum + z
works and it stores 46GoodMorning */
var learningTypescript = true;
learningTypescript = false;
var name = "Askari";
var age = 20;
var sentence = "My name is ".concat(name, " and I am ").concat(age, " years old.\nI'm learning Typescript");
console.log(sentence);
/* In variable sentence of type string we have used string interpolation and it works well*/

