1. var : var is function-scoped and it can be redeclared.
let : let block-scoped and can be reassigned but not redeclared in the same scope.
const : const is block-scoped and it cannot be reassigned(must be initialized).


2.map() : It returns an array of pieces of information from the original array. in the callback function, return the data i wish  to be part of the new array.

filter() : Returns a subset of the original array based on custom criteria.

forEach() : It is used to perform side effects like logging or updating external variables. it does not return anything.

3. Arrow function in ES6  allows a shorter syntax for funtion expressions. we don't need the function keyword, the return keyword and the curly brackets.
For example : let myFunction = (a,b) => a+b;

4.Destructing assignment is a syntax that enables us to unpack values from arrays or objects into individual variables.

For example : const numbers = [1,2,3];
const [a,b] = numbers;

That means a=1, and b=2.

Or, 
    const user = {name: "urmi" , age: 21};
    const {name, age} = user;

That means name = "urmi" , age = 21.

5. Template literal is an ES6 feature that allows us to concat strings more quickly and in a much more readable form. Template literals are enclosed by backtick (`) characters instead of double or single quotes. it allow embedding variables and expressions using ${}. And support multiple line strings.

For example : const name = "urmi";
console.log(`my name is ${name}.`);