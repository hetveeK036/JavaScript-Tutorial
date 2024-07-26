/* write JS program to genraten random number and stor it in variable. 
The program then takes input from the user to tell them whether the guess is correct, grater or lower 
then orignal number.100(numberv of guess) is the score of the user the program is accepted to terminal 
once the number is guess number should be between 1 - 100. */
/*
let random_Int = Math.random() * 100;
random_Int = Math.round(random_Int);
console.log(random_Int);
let value = prompt("enter any number :");
let chance = 1;
while (random_Int != value) {
    console.log("the number is", random_Int<value ? "less then " + value : "grater then" + b )
    value = prompt("guess the number again ");
    chance += 1
}
console.log("guess the correct value");
console.log(` you took ${chance} chances the guess the right answer.`);*/

let random_num = Math.random() * 100 ;
random_num = Number.parseInt(random_num);
console.log("randome number is : ", random_num);
let chance = 1;
let value = prompt("enter  number : ");
while (random_num != value) {
    console.log("Number is " , random_num > value ? "grater then " + value : "less then " + value  );
   value = prompt ("guess number again : ");
    chance += 1;
}
console.log(" well done ! you guess the correct value. ")
console.log(` you take ${chance} to guess the correct value.`);

/* // without using prompt
let number = Math.random() * 10;
number = Number.parseInt(number);
console.log("randome number is : ", number);
let varo  = 1;

let value = console.log("enter any numbar :"+ value);

if (number != value) {
    console.log("number is not same");
} else {
    console.log(value > number ? "number is grater then " + value : "number is less then " + value );
    value = console.log("enter again new number : ", value);
    varo += 1;
}
console.log("well done !  you choose right number . ");
console.log(`u take ${varo} to guess right value.`);

*/

