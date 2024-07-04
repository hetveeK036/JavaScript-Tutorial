//Create variable of type string and try to add a number to it,

let a = "hello";
let b = 6;
console.log(a + b);

//Q2  use type of opretor to find the datatype of sting in last question.

console.log(typeof(a + b));

// Q3create const object in javaScript can u change it hold number later?

//can not hold same name
const number = {
    name : "het",
    class: 'a',
    isPrincipled: false
}

console.log(number);

//Q4  try to add new key to the const object in problem 3 were u able to do it? 

number['het'] = 'nick';
console.log(number);

//Q5 write js  program to cereate word- meaning dictionary of 5 - word

const dictionary = {
    tautology: "needless repetition of an idea",
    dovetail: "to join or fit together compactly or harmoniously.",
    metonymy: "referring to something by one of its attributes or a by a related word.",
    beek: "to bask or warm in sunshine or before a fireplace, stove, or bonfire",
    jubilee: "a celebration of the anniversary of a special event",
}