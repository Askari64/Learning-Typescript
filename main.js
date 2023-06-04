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
var n = null;
var u = undefined;
console.log(n);
console.log(u);
var arrNum = [1, 3, 6, 8, 5];
console.log(arrNum.map(function (num) {
    return num;
}));
// we declare an array with syntax let varName: dataType[] = [array content];
var person = ['Askari', 20];
console.log(person);
// person is a tuple which stores string and number. the order and data type and number must always match the tuple type declared.
var Cars;
(function (Cars) {
    Cars[Cars["Mercedes"] = 0] = "Mercedes";
    Cars[Cars["Bently"] = 1] = "Bently";
    Cars[Cars["Lamborghini"] = 2] = "Lamborghini";
    Cars[Cars["Ferrari"] = 3] = "Ferrari";
    Cars[Cars["Dodge"] = 4] = "Dodge";
})(Cars || (Cars = {}));
;
var c = Cars.Lamborghini;
console.log(c);
c = Cars.Dodge;
console.log(c);
// Cars is an enumerated data type defined with keyword enum. enum datatype has syntax: enum dataTpeName {valuesToBePassed};
//c is a variable of dataType Cars which stores value of one of the values from the dataType Cars
//console.log(c) gives you the index of the Value of Cars instead of the Value itself. Index of enum starts from 0 by default
var multiType = 20;
console.log('multiType = ', multiType);
multiType = 'Askari';
console.log('multiType = ', multiType);
/*multiType variable has more than 1 type i.e number and string*/ 
