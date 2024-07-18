// Array
// Store more then one value in single array.
// Array are mutable and it can be changed.

let marks = [39, 89, 78, 50, 90];
console.log("marks : ",marks ,'\n');

console.log("marks of number of [3] index : ",marks[3]);
console.log("marks of number of [1] index : ",marks[1]);
console.log("marks of number of [6] index : ",marks[6]); // undefine

console.log("array at index[2] is : ", marks.at(2), '\n');

console.log("ADD new value to an array : ",(marks[7] = '87'));
console.log("marks : ",marks);
console.log("update the value of an array : ", (marks[0] = '98'));
console.log("marks : ",marks ,'\n');


// it also stor differnet type of value.

let type = [12, "hello", true, 13.4, "not define", null];
console.log(type);
console.log("Length of array type : ",type.length);

console.log("type of an array is : ", typeof(type) ,'\n');

// Array methods
console.log("----------Array Methods--------------");
let num = [30, 40 ,87, 53, 86, 115, 965];
let str = num.toString();
console.log("str : ", str);
console.log("to string : ", typeof(str) ,'\n');

let c = num.join("_*_ ");
console.log( "ADD _*_ in array ; ",c ,'\n');

let r = num.push(90); //add last element of an array
console.log("PUSH 90 in an array : ",r); // shoew length of an array
console.log( "num  ARRAY : ",num , "||   num lenght : ",num.length ,'\n');
``
console.log("index of 0 is : ", num[0] ,"\n");

let q = num.pop(); // remove last element of an array
console.log("POP an array : ", q);
console.log("num ARRAY : ",num , "||   num lenght : ",num.length ,'\n');

console.log( delete  num[2]);
console.log("num ARRAY : ",num , "||   num lenght : ",num.length ,'\n');

let s = num.shift(); //remove first element of an array
console.log("Shift an Array : ", s );
console.log("num ARRAY : ",num , "||   num lenght : ",num.length ,'\n');

let u = num.unshift(23,13, 29 ,65); //add first element of an array
console.log("UnShift an Array : ", u );
console.log("num ARRAY : ",num , "||   num lenght : ",num.length ,'\n');

let so = num.sort(); // sort alphabeticaly
console.log("Sorted Array : ", so,'\n');

// sort ascending order
let Asending = (a, b) =>{
    return a - b;
}
console.log("Sorted an Array in ascending order : ",num.sort(Asending));

// sort disAsending order
let DisAsending = (a, b) =>{
    return b - a;
}
console.log("Sorted an Array in disAsending order : ",num.sort(DisAsending),'\n');


let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num3 = [21, 22, 23, 24, 25, 26, 27, 28, 29];

let marge = num1.concat(num2);
let marge1 = num1.concat(num2, num3);

console.log("concate of two array : ", marge);
console.log("num1 an ARRAY : ",num1 ,"\n","num2 an ARRAY : ",num2, "\n");

console.log("concate of three array : ", marge1);
console.log("num1 an ARRAY : ",num1 ,"\n","num2 an ARRAY : ",num2, "\n","num3 an ARRAY : ",num3, "\n"); 

let add = num1.concat("Hello");
console.log("conacate array : " ,add, '\n');

let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log("fruits : ",fruits);
console.log( "copywithin() with two args.: ", fruits.copyWithin(4, 1),'\n'); //.copyWithin(target: number, start: number, end?: number): string[]
console.log( "copywithin() with three args. : ", fruits.copyWithin(1, 0, 4),'\n'); 

let fruit = ['mengo', 'apple', 'orange', 'kivi']
console.log( "fruit : ",fruit);
console.log("index of Apple : ",fruit.indexOf("apple"));
console.log("last index of : ", fruit.lastIndexOf('kivi')+1);
console.log("includes : ", fruit.includes('watermelon'));

//Splice and slice
console.log("------Splice and slice---------"); 
//Splice : is use to add new item to an array.
let value = [43, 67, 87, 55, 87, 23, 116, 643];
console.log("an Array : ",value);
console.log("array length : ", value.length ,'\n');

value.splice(2,3,789,564,258,900,10); // splice(start: number, deleteCount?: number):
console.log("Splice Array : ",value ,'\n');

//slice : sliced out a piece from an array , create a new array

let newvalue = value.slice(3); //slice(start?: number, end?: number): number[]
console.log("Slice array : ", newvalue);


let newvalue1 = value.slice(3,7); 
console.log("Slice array : ", newvalue1);

// Using loops with array
console.log("---------Using loops with array--------");
//foreach loop
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((element) => {
  console.log(element * element, "\n");
});

console.log("----Array.form------");
let name = "Hetvee Kholiya";
let arr = Array.from(name);
console.log("Array form of : ", name, " is  : ", arr, "\n");

// for-in loop
console.log("----for-in loop------");
console.log("for of loop print key of an array");
for (const i in numbers) {
  console.log(i);
}
console.log(" in for of loop if we print array[i] then it print value of an array");
for (const i in numbers) {
  console.log(numbers[i]);
}
//for-of loop
console.log("----for-of loop------");
console.log("for of loop print value of an array");
for (const item of numbers) {
  console.log(item);
}
