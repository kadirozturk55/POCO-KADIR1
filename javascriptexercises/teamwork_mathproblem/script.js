function findGCD(number1, number2) {
    while (number2 !== 0) { //number2 = 45;
        let remainder = number1 % number2; // 30 bölü 45 kalan 30 olur ve bunu remainder e atariz
        number1 = number2; //number 1 e number 2 yi ata yani number1 artik 45------- number1=45
        number2 = remainder; // kalan 30 u da number 2 ye ata ---------------------- number2=30
    }
    return number1;
}


let number1 = 30;
let number2 = 45;
let GCD = findGCD(number1, number2);
console.log("Greatest Common Divide(GCD): " + GCD);

//----------------------------------------------------------
let numbers1=10;
let numbers2=20;

if (numbers1>numbers2) {
    console.log (`The greater number of ${numbers1} and ${numbers2} is ${numbers1}`)
    console.log (`The smaller number of ${numbers2} and ${numbers1} is ${numbers2}`)
} else if (numbers2>numbers1) {
    console.log (`The greater number of ${numbers2} and ${numbers1} is ${numbers2}`)
    console.log (`The smaller number of ${numbers1} and ${numbers2} is ${numbers1}`)
} 

//------------------------------------------------------

let language=prompt("please enter a language like en,fr or de ")
switch(language) {


    case "en":
    console.log ("Hello, World");
    break;
    case "fr":
    console.log ("Bonjour,Le Monde");
    break;
    case "de":
    console.log ("Hallo,Welt");
    break;
}