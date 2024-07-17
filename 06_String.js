//String
let name = "hello";
let nam = 'hello';

let Fname = "Hetvee" ;
let Sname = " Kholiya ";
let str = "Apple, Banana, Mengo";

// template Literals
let names = `Hello Miss.${Sname} is your Name is ${Fname} ? do you like ${str}.`;
console.log(names);

console.log(Fname + " = to uppercase : ", Fname.toUpperCase());
console.log(Fname + " = to lowercase : ", Fname.toLowerCase());

console.log(Fname + " = Split : ",Fname.split(3));
console.log(Fname + " = length : ", Fname.length );
console.log(Fname + " = indexof : ",Fname.indexOf('t'));
console.log(Fname + " = CharAt : " ,Fname.charAt(3));
console.log(Fname + " = charCodeAt : ", Fname.charCodeAt(1));
console.log(Fname + " = Slice : ",Fname.slice(2,5));
console.log(Fname + " = Substring : ", Fname.substring(1,4));
console.log(str + " = str includes 'apple': ", str.includes("Apple"));
console.log(Fname + " =  Fname startWith H : ", Fname.startsWith('H'));
console.log(Fname + " =  Fname endWith t : ", Fname.endsWith('t'));
console.log(Fname + " + " + Sname + " = concate : ", Fname.concat("",Sname));
console.log("sname : " + Sname +"  || Sname before trim : " + Sname.length + " || after  trim : " , Sname.trim().length);
console.log(Fname + " =  string repeat : ",Fname.repeat(2));
console.log("Before str replace : "+ str + " ||  after replace : " + str.replace("Banana", 'KIVI'));``

//Escape Sequnce Character
console.log("-------Escape Sequnce Character--------");
// \ = '
// \n = new line
// \t = tab
// /r = carrige return

let fruit = 'i love mengo\'s';
console.log("use back slace(\) ",fruit);

let para = "hayy \n what are u doing.  hows life is going? \t everything is allright. ";
console.log(para);

// Quize use for loop to print striing
console.log("--------example---------");

let friend = "Manshi";
console.log("----Use for loop-------");

for(let i = 0 ; i < friend.length; i++)
{
    console.log(friend[i]);
}
console.log("----Use for in loop-------");

for (const key in friend) {
    console.log(friend[key]);
}

console.log("----Use for of loop-------");

for (const i of friend) {
    console.log(i);
}

