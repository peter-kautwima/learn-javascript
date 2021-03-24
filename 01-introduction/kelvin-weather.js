
// Todays forecast in Kelvin 
// change value to update output
const kelvin = 0;
// convert Kelvin to Celsius
const celsius = kelvin - 273;
//Convert Celsius to Fahrenheit
let fahrenheit = celsius* (9/5) + 32;
// round down farenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperatue is ${Newton} degrees Newtons.`);
