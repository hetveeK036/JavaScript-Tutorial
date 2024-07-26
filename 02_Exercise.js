//  1. WAP using prompt function take input of a age as a value from user and use alert to tell him he can drive
let age = prompt("enter your age : ");
if(age > 18) {
    alert('You can drive');
} else {
    alert("You can't drive , you are below age");
}
//or
let age1 = prompt("enter your age : ");
const canDrive = (age1) => {
    return age1 >= 18 ? true : false ;
}
if(canDrive(age1)) {
    alert('You can drive');
} else {
    alert("You can't drive , you are below age");
}

// 2. In Q1 use confirm to ask user if he want to see prompt again? 
let runAgain = true ;
const canDrive1 = (age) => {
    return age >= 18 ? true : false ;
}
while (runAgain) {
    const age = prompt("enter your age : ");
        if (canDrive1(age)) {
            alert("u can drive")  ;      
    } else {
            alert("u can't drive");      
    }
    console.log("user age :", age)
   runAgain = confirm("do u want to try again :") 
    console.log("user's updated age", age)
}

// 3. use console.error in privous Q if age is nagative.
let age3 = prompt("enter your age : ");
if(age3 > 18) {
    console.log('You can drive');
} else if(age3 < 1) {
    console.error(" u can't enter negative age .");
} else {
    console.log("u cann't drive")
}

//4. WAP to change url to google.com (rediration) if user enter number grater than 4.
let num = prompt("enter number :");
if(num > 4){
    location.href = "https://google.com"
} else {
    // location.herf = "https://youtube.com"
    console.log (" number is less then 4")
}

//5. change the background-color of the page base on user input through prompt
let color = prompt("enter background-color :");
Document.body.style.background = color;