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
let n: null = null;
let u: undefined = undefined;
console.log(n);
console.log(u);

let arrNum: number[] = [1,3,6,8,5];

console.log(arrNum.map((num) => {
    return num;
}))

// we declare an array with syntax let varName: dataType[] = [array content];

let person: [string, number] = ['Askari' , 20];
console.log(person);
// person is a tuple which stores string and number. the order and data type and number must always match the tuple type declared.

enum Cars {Mercedes, Bently, Lamborghini, Ferrari, Dodge};

let c: Cars = Cars.Lamborghini;
console.log(c);
c = Cars.Dodge;
console.log(c);
// Cars is an enumerated data type defined with keyword enum. enum datatype has syntax: enum dataTpeName {valuesToBePassed};
//c is a variable of dataType Cars which stores value of one of the values from the dataType Cars
//console.log(c) gives you the index of the Value of Cars instead of the Value itself. Index of enum starts from 0 by default

let multiType: number | string = 20;
console.log('multiType = ', multiType);
multiType = 'Askari';
console.log('multiType = ', multiType);

/*multiType variable has more than 1 type i.e number and string*/

//FUNCTIONS

function add(num1:number, num2:number): number/*return type*/ {
    let addedNum:number = num1 + num2;
    console.log(addedNum);
    return addedNum;
}
add(57,39);

function multiply(num1: number, num2: number):number {
    let multipliedNum:number = num1*num2;
    console.log(multipliedNum);
    return multipliedNum;
}

multiply(3546,654);

//in function add and multiply we have mentioned the return type of function. 
// syntax is function name(param1:type, param2:type) : return type {function body}

//OPTIONAL PARAM
function sub(num1:number, num2? : number):number {
    if (num2 === undefined) /*can also be if(num2) meaning if num2 is true or exists */ {
        console.log('there is no 2nd parameter. \n', num1)
        return num1;
    }
    else {
        let subNum = num1 - num2;
        console.log(num1,'-',num2 ,' = ', subNum);
        return subNum;
    }
}

sub(65);
sub(54,27);

// in function sub, num2 param is optional by adding '?' after param name it becomes undefined so we must handle it with an if else statement or truthy falsy
//NOTE- Optional parameter always come after the required params

//DEFAULT PARAM

function sub2(num1:number, num2 : number = 20):number {
     
        let subNum = num1 - num2;
        console.log(num1,'-',num2 ,' = ', subNum);
        return subNum;
    
}

sub2(35);
sub2(100,20);

// num2:number =20 is default param so if only 1 param is passed then 2nd param will be 20 by default and if both are passed then 2nd param will
//be of the passsed value rather than the default

//INTERFACE

interface person {
    firstName: string;
    lastName: string;
    age: number;
}

function Greet(person:person) {
    let fullName: string = `${person.firstName} ${person.lastName}`
    console.log(`Hello! My name is ${fullName} and I am ${age} years old.`);
}

let p = {
    firstName: 'Askari',
    lastName: 'Rizvi',
    age: 20
}
Greet(p);

// We created an interface person which is an object. Then we created a function Greet and passed param person of type person interface.
//Then we created a new object p based on person interface and passed into the function Greet. Since p is based on interface person, it works well

//CLASSES

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    Greet() {
        console.log(`Good Morning ${this.employeeName}!`);
    }
}

//creating instance of class

let emp1 = new Employee('Askari');
console.log(emp1.employeeName);
emp1.Greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager is delegating Work`);
    }
}

let m1 = new Manager('Rizvi');
m1.Greet();
m1.delegateWork()
console.log(m1.employeeName);
//wont need this in react development anyways
