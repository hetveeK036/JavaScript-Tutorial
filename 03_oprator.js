//Oprators in js

// Arithmetic Oprator
console.log("-----------------------Arithmetic  Oprator-----------------------------------");
let a = 23;
let b = 13;
let c = 'hii';

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a / b = ", a / b);
console.log("a * b = ", a * b);
console.log("a % b = ", a % b);
console.log("a = b : ", a = b);

let q = 20;

// console.log("q++ : ", q++);  //  20
// console.log("++q : ", ++q); // 22
// console.log("q-- : ", q--); //22
// console.log("--q : ", --q); //20
// console.log("q", q); //20
// console.log("q++", q++); //20

//Comparison Oprator

console.log("-----------------------Comparison  Oprator-----------------------------------");

console.log("a != b : ", a != b);
console.log("a !== b : ", a !== b);
console.log("a == b : ", a == b);
console.log("a === b : ", a === b);
console.log("a < b : ", a < b);
console.log("a > b : ", a > b);
console.log("a <= b : ", a <= b);
console.log("a >= b : ", a >= b);
console.log("a === c : ", a === c);
console.log("a == c : ", a == c);
// console.log("a ? b : ", a ? b );



// console.log("a ** b : ", a ** b);
// console.log("a === b : ", a === b);
// console.log("a ** c : ", a ** c);



// Assingment Oprator
console.log("-----------------------Assingment Oprator-----------------------------------");

let p = 10;
let r = 24;

console.log(" p += r", p += r);  //34
console.log(" p -= r", p -= r); //10
console.log(" p *= r", p *= r);//240
console.log(" p /= r", p /= r);//10
console.log(" p %= r", p %= r);//10
console.log(" p ** r", p ** r);//10

// Logical Oprator
console.log("-----------------------Logical Oprator-----------------------------------");

let x = 10, y = 7 ;

console.log(x<=7 && x==5);
console.log(x >= 5 || x == 5);
console.log(!false);

// && t t t , t f t, f t t, f f f
//|| t t t, t f f, f t f, f f f.

// Conditional Statement
console.log("-----------------------Conditional Statement-----------------------------------");

//1. If Statement.

 let s = 10;
 if (s <= 15){
    console.log("hello");
 }

 //2. If ... else Statement

 let k = 20;
 if (k >= 18) {
    console.log("you are eligable drive");
 } else {
    console.log("you are not eligable drive");  
 }

 //3. If ... else If ... else Statement

 let age = 5;

 if (age < 0 ) {
    console.log("it's invalid age.");
 } else 
 if (age < 9 ) {
    console.log("you are kid");
 } else 
 if (age <= 18 && age < 9 ) {
    console.log("you are still kid you can't drive");
 } else {
    console.log("you can drive");
 }

 //switch case

console.log("-----------------------Switch case-----------------------------------");

let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log("Today is", day);

console.log("-----------------------ternary oprator-----------------------------------");
// condition ? exp1 : exp2;
let umar = 19;
console.log("you can", (umar >= 18 ? "drive" : "not drive"));