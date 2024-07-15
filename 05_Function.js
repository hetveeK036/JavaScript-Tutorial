//Function

let a = 2 ;
let b = 5;
let c = 7;

console.log("sum of a and b is  : ", a + b);
console.log("sum of b and c is  : ", b + c);
console.log("sum of a and c is  : ", a + c);

// to over come this function is use 

console.log("-------Using Function-----------");
function SumPluseOne(p, q) {
    return (p + q) + 1;
    console.log("hayyy !");
}
let x = 12.6;
let y = 32;
let z = 22.2;

console.log("sum of x and y pluse one is : ", SumPluseOne(x, y));
console.log("sum of y and z pluse one is : ", SumPluseOne(y, z));
console.log("sum of x and z pluse one is : ", SumPluseOne(x, z));

console.log("------Arrow Function-----");

const  Hello = () => {
console.log("hayy whT ARE YOU DOING? ");
}

Hello( );