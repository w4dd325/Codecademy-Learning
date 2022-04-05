//To start, create a variable named kelvin, and set it equal to 293.
//const kelvin = 293;
const kelvin = 0;
//Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
let celsius = kelvin - 273;
//Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
let fahrenheit = (celsius * (9 / 5) + 32);
//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


//If you’d like extra practice, try this:
let newton = (celsius * (33 / 100));
newton = Math.floor(newton);
console.log(`The temperature is ${newton} newton.`);