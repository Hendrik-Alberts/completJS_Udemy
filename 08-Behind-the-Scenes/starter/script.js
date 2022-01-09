'use strict';
/*
function calcAge(birthYear) {
  const age = 2021 - birthYear;
  function printAge() {
    const output = `You are ${age}, born in ${birthYear};`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial , ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
  }
  printAge();

  return age;
}

const firstName = 'Hennie';
calcAge(1991);
*/

//******************* Hoisting with Variables */
/*
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Hennie';
let job = 'Developer';
const year = 1998;

//********************* Hoisting with Functions **************   
/*
console.log(addDec(3, 5));
//console.log(addExp(3, 6));
//console.log(addArrow(3, 6));

function addDec(a, b) {
  return a + b;
}
// This will give me an error too. This function is also just a variable, so it's also in the temporal dead zone.
const addExp = function (a, b) {
  return a + b;
};

// This will also give an error.
const addArrow = (a, b) => a + b;

//Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 2;
let y = 3;
const z = 8;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// *********************** The .this keyword ********************
/*
console.log(this);

//The this key word will be undefined if used with strict mode. If used with 'sloppy mode' it will be the window object as with the console.log in the global execution context.

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

//So remember that the this keyword in an arrow function will point to the parent scope. In this case that would be the windows object.
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const hennie = {
  birthYear: 1821,
  calcAge: function () {
    console.log(2037 - this.birthYear);
  },
};
hennie.calcAge();

//NOTE: Remember that the this keyword will point to the object that is calling the method.  

const bai = {
  birthYear: 2200,
};
//Here we are calling the method on Bai
bai.calcAge = hennie.calcAge; //method borrowing
bai.calcAge();

const f = hennie.calcAge;
f();
*/

// *********************** Rugular Functions vs Arrow Functions **********************
/*
const hennie = {
  firstName: 'Hennie',
  year: 1976,
  calcAge: function () {
    //console.log(this);
    console.log(2021 - this.year);

    const isMill = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMill();
  },
  greet: () => console.log(`Hi ${this.firstName}`),
};
hennie.greet();
hennie.calcAge();
*/
//Never use an arrow function as a method. Remeber, not this keyword.

//Function inside a method

// ******************* The Arguments Keyword *************************

// Functions also have access to an arguments keyword. The keyword is only available in regular functions.

// ******** Primitives vs. Objects (Primitive vs Reference Types) *****
