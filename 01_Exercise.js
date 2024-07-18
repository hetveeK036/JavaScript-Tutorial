/* write JS program to genraten random number and stor it in variable. 
The program then takes input from the user to tell them whether the guess is correct, grater or lower 
then orignal number.100(numberv of guess) is the score of the user the program is accepted to terminal 
once the number is guess number should be between 1 - 100. */

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
console.log(` you took ${chance} chances the guess the right answer.`);