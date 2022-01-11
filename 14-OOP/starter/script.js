'use strict';
//newSection: 206. What is OOP?
//This is a good high level overview video and worh watching multiple times.

//newSection: 207. OOP with JavaScript
//In JS we have an Instance inheriting from a class.

//newSection: 208. Constructor Functions & The New Operator
/*
//We create a constructor function with the new keyword. They also always start with a capital letter. An arrow function will not work as a contructor since it does not have it's own this keyword. So this function is going to crate an object, and in this case for a person.

const Person = function (firstName, birthYear) {
  //console.log(this); // returnes empty Person object

  //These properties here will be the instance properties. That's because the properties firstName and birthYear will be available on all the instances that are created through the construcror function.
  this.firstName = firstName;
  this.birthYear = birthYear;

  //NOTE:  Never do this. Never create a method inside of a constructor function. Each object you'll create with this constructor functon will carry around this function. If we have a bunch of these it will be terible for the performance of our code.

  //this.calcAge = function () {
  //console.log(2022 - this.birthYear);
  //};

  //NOTE: Instead we will use prototypes and prototypal inheritance to achieve this.
};

const hennie = new Person('Hennie', 1976);
console.log(hennie);

//NOTE: When we use the new keyword the following happen:
//1. New empty object is created {}
//2. Function is called and .this keyword is set to newly created {}.
//3. {} is linked to a prototype
//4. {} is automatically returned form constructor function.

const max = new Person('Max', 2007);
const rue = new Person('Rue', 2003);
console.log(max, rue);

//NOTE: Even though we don't have classes here, we can say that hennie, max and rue are instances of the Person object. They received prototypal inheritance from Person. We have an operator to test this.

console.log(hennie instanceof Person); //true
console.log(Person instanceof Person); //false
*/
//newSection: 209. Prototypes
/*
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

//Each object created by this constructor function will now get acces to all the methods of this prototype property. NOTE: The this keyword is set to the object that's calling the method.

max.calcAge();
console.log(max.__proto__);
console.log(max.__proto__ === Person.prototype); //true
//We can aslo check of an object is a prototype by:
console.log(Person.prototype.isPrototypeOf(max)); //true
console.log(rue.isPrototypeOf(max)); //false

console.log(Person.prototype.isPrototypeOf(Person)); //false
//NOTE: From this we can deduce...Person.prototype is the prototype that is going to be used by all the objects that are created with the person.Prototype constructor function. Read that again and make sure you fully understand this.

//We can also set properties on the prototype:
Person.prototype.species = 'Homo Sapies';
console.log(max, rue);
//We can check if a object has it's own property(declared directly on the object itself) or if it is inheritet.
console.log(max.hasOwnProperty('firstName')); //true
console.log(max.hasOwnProperty('species')); //false, because is not inside the hennie object. It simply has acces to it since it's in the Person prototype
*/
//newSection: 210. Prototypal Inheritance & The Prototype Chain
/*
//NOTE: This is a great video that will recap the previous lecgture with good diagragms.
*/
//newSection: 211. Prototypal Ingeritance & Built-in Objects
/*
console.log(hennie.__proto__.__proto__); //Object.prototype
console.log(hennie.__proto__.__proto__.__proto__); //null This is the prototype of Object.prototype

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 4, 32, 4, 3, 2, 2, 2, 2, 2, 4, 4];
console.log(arr.__proto__); //This will show all the methods I have access to when working with arrays. All neatly contained within the __prototype__.
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__); //Back at object.proto
console.log(arr.__proto__.__proto__.__proto__); //and null again

// ___________________ LOST ME AT 0812 ______________________
*/
//newSection: 213. ES6 Classes

//ES6 classes allow us to do the same thing as Constructor Functions, but it allows us to use a more modern syntax. Remeber that classes are still functions. That's why this syntax is written like a function expression or declaration.

//Class expression
//const PersonCl = class {}

//This is a class declaration
class PersonCl {
  constructor(firstName, birtYear) {
    this.firstName = firstName;
    this.birtYear = birtYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birtYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

//We can also add a mehod manually
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

//NOTE:
//1. Classes are NOT hoisted
//2. Classes are first class citizens
//3. The body of class executed in strict mode

//So constructor or classes? It's a matter of personal preference. Make sure you understand prototypal inheritance though.
//NOTE: Come back and review this later if needed.
