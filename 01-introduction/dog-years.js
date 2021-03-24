// My age
let myAge = 29;
// First 2 dog years @ 10.5 human years
let earlyYears = 2;
earlyYears *= 10.5;
// later dog years @ 4 human years
let laterYears = myAge - 2;
// dogs later years 
laterYears *= 4;
console.log(`Early years ${earlyYears}`);
console.log(`Later years ${laterYears}`)
// my age in dog years
let myAgeInDogYears = laterYears + earlyYears;
//my name lower case
const myName = "Peter".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);