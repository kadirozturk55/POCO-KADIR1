let age;
let desiredAgeofRetirement;
let today = new Date().getFullYear();

/* if user enters wrong (
    age<=40 || 
    age>100 || 
    desiredAgeofRetirement<=40 || 
    desiredAgeofRetirement>100 || 
    age>=desiredAgeofRetirement
) 
information, the system should be able to show the prompt everytime*/

do {
  age = parseInt(prompt("please enter your age"));
  desiredAgeofRetirement = parseInt(
    prompt(" please enter your desired age to retire")
  );
} while (
  40 > age ||
  age > 100 ||
  40 > desiredAgeofRetirement ||
  desiredAgeofRetirement > 100 ||
  desiredAgeofRetirement < age
);

let leftyear = desiredAgeofRetirement - age;
let retirementyear = today + (desiredAgeofRetirement - age);

console.log(
  `You have ${leftyear} years to retire and today is ${today} so yo will retire in ${retirementyear} `
);

/* 
if(age<=40 || age>100 || desiredAgeofRetirement<=40 || desiredAgeofRetirement>100 || age>=desiredAgeofRetirement) {
   
    let age=Number(prompt("enter your desired age to retire"));
    let desiredAgeofRetirement=Number(prompt("enter your desired age to retire"));
}
else {
    console.log(`You have ${leftyear} years to retire and today is ${today} so yo will retire in ${retirementyear} `)
    
}*/
