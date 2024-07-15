// For loop
for (let i = 0; i < 10; i++) {
    console.log(i);  
}
// sum of first natural number
console.log("---------sum of first natural number----------");
let sum = 0 ;
let n = 5;
for(let i = 0 ; i <= n ; i++){
    console.log("i value is : ", i);
    sum += (i+1)
    console.log((i+1) +"=" + sum)

}
console.log("sum of first "+ n + " natural number is = " + sum);

// for in loop
console.log("----------For in loop-------------");

let obj = {
    raj : 23,
    jack : 34,
    krish : 56,
    harsh :76
}
for (const a in obj) {
    // console.log("a", a);
    console.log("keys in objects are : ",a);
    console.log("values in objects are : ", obj[a]);
    }

//for of loop
console.log("----------For in loop-------------");

for (const b of 'krish') {
    console.log(b); // use in array
}

//while loop
console.log("----------While loop-------------");

let a = 5;

let i = 0;
while (i<a) {
    console.log(i);
    i++;
}

//do while loop
console.log("---------- do While loop-------------");
let age = 10;

let j = 5;

do {
    console.log( "j = ",j);
    j++
} while (j < age);

