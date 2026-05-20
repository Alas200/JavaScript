console.log(typeof 42); // Output: "number"
console.log(typeof 'Veinticinco'); // Output: "string"
console.log(typeof -666); // Output: "number"
console.log(typeof true); // Output: "boolean"
console.log(typeof 0); // Output: "number"
console.log(typeof ''); // Output: "string"
console.log(typeof null); // Output: "object"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof false); // Output: "boolean"
console.log(typeof NaN); // Output: "number"
console.log(typeof 3.14); // Output: "number"
console.log(typeof 'Hello, World!'); // Output: "string"
console.log(typeof {}); // Output: "object"
console.log(typeof []); // Output: "object"
console.log(typeof function() {}); // Output: "function"
console.log(typeof Symbol('sym')); // Output: "symbol"  
console.log(typeof BigInt(12345678901234567890)); // Output: "bigint"


const  num  =  42;
   
const  strFromNum1  =  String(num);
const  strFromNum2  =  String(8);
const  strFromBool  =  String(true);
const  numFromStr  =  Number("312");
const  boolFromNumber  =  Boolean(0);

console.log(strFromNum1); // Output: "42"
console.log(strFromNum2); // Output: "8"
console.log(strFromBool); // Output: "true"
console.log(numFromStr); // Output: 312
console.log(boolFromNumber); // Output: false

console.log(typeof strFromNum1); // Output: "string"
console.log(typeof strFromNum2); // Output: "string"
console.log(typeof strFromBool);    // Output: "string"
console.log(typeof numFromStr); // Output: "number"
console.log(typeof boolFromNumber); // Output: "boolean"   

let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); // !!! number 
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // !!! number





