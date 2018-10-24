/*
//=============JavaScript Basic for React============================/
//Arrow function
const square = number => number * number;
console.log(square(10));

const colors = ["red", "blue", "green"];
//Arrays.map
const colorList = colors.map(item => `<li>{$item}</li>`);
console.log(colorList);
//Spread operator
const num = [1, 2, 3];
const spread = [...colors, "avi", ...num];
console.log(spread);
// Object Destructuring
const address = { street: "B-Block", flat: "B67", sector: "41" };
const { street: st, flat: flt, sector: sec } = address;
console.log("street", st);
console.log("flat", flt);
console.log("sector", sec);
//default exports 
*/

/*
export deault class Person
{
 constructor (name){
     this.name = name;
 }

 sayHello()
 {
     console.log("Hello from "+name);
 }

}
*/
