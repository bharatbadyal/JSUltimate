/*
Section OverView
  : property access
  : Dot vs Bracket
  : Destructuring
  : Nesting + loops
  : Nesting + loops

*/

let name = {};
name.person = "Mr. White";

let name1 = {
  person: "Mr. Black",
};

// permitive do call by value
// objects do call by reference

// console.log(name, name1);

let person = [];
person.name = "Bharat";
console.log(person);

let who = person.name;
console.log(who);

//in JS arrays are objects so rules are going to exactly be the same
