// Variable naming
// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.

var oldjs = "The var keyword is almost the same as let. its global scope";
let variable = "To create a variable in JavaScript, use the let keyword. it's blocked scope";
const ek = "To declare a constant (unchanging) variable, use const instead of let";


//let can be updated but can not re-declare.
// var can be updated & re-declare with in the scop.
// const nither updated & re-declare.

let a2 = 4;
console.log(a2);
let a1= "hello";
console.log(a1);

var a = 12;
var a = undefined ;
var b = "hayy";
var d = null;

{
    let b = 'this';
    console.log("block b :",b);
}
console.log("global b :",b);

let q = 13;
let w = "dude";
let e = undefined;
let r = null;
{
    let w = "baby";
    console.log("blocked w :",w);
}
console.log(w);
