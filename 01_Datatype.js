 // Primitive Datatype :- Null, Number, String, BigInt, Undefined, Boolean, Symbol()
//non-primitive Datatype : object, array
//String
var name = "Hetvee";
let Sname = 'Kholiya';
var say = `hello ${name} ${Sname} ! How are you ?`;
console.log(say);

//number

let num = 23;
let num1 = 34;
console.log(num + num1);

//BigInt

var longInt = BigInt(589);
console.log(longInt);

//Boolean
let isGreater = 4 > 1;
console.log( isGreater );

// null

var age = null;
console.log(age);

// undefine`
var user = undefined;
console.log(user);


//object
var item = {
    "ansh" : true,
    "aashish": 25,
    "aastha" : false,
    "aarya" : true,
    "mohan" : undefined,
    "rohan" : null
    }
console.log("objects item :", item);
console.log("ansh value", item["ansh"]);
console.log("rohan value", item['rohan']);

// array
var numbers = [12, 3, 45, 76, 3, 64, 2 ];
console.log(numbers);

//typeOf
console.log( typeof(name));
console.log( typeof(longInt));
console.log( typeof(num));
console.log( typeof(age));
console.log( typeof(user));
console.log( typeof(isGreater));
console.log( typeof(student));
console.log( typeof(numbers));
