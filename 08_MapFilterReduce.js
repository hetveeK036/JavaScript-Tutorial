//map
let arr = [21, 45, 65];
console.log("an Array : ",arr);
console.log("array using map() : ");

const a = arr.map((value,index, array) => {
    console.log(value , index, array);
    return value + 1;
});

console.log("array value + 1 : ",a ,'\n');

//foreach
console.log("use foreach loop");
let b = arr.forEach((element, index, array) => {
    console.log(element, index, array);
    return element +2;
});
console.log("array element * index : " ,b, '\n');

// filter 
console.log("-----Filter-----");
let arr1 = [23, 43, 52, 2, 6, 9, 0, 4 ,23, 54];

let a1 = arr1.filter((value) => {
    return value < 20;
});
console.log("filter array : ", a1 , '\n');

// reduce 
console.log("------reduce-------");
let arr0 = [1,4, 5, 2, 5];

let reduce_arr = arr0.reduce((arr, arr9) => {
    return arr * arr9;
})
console.log("reduce array : ", reduce_arr);

// or
let reduce_Func = (h1, h2) => {
    return h1 + h2
}
let fun = arr0.reduce(reduce_Func);

console.log("reduce array : ", fun);

