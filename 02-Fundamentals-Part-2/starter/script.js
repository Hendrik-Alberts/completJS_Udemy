"use strict";
//Has to be very first statement in code. Comments are allowed. Strict mode makes it easier to avoid bugs. It will create visible errors for us.It also forbids us to do certain things.

//***************** Functions ************************** */
/*
function logger() {
  console.log("Hello");
}
//Invoke, calling or running the funct (). Every time I invoke the funct the code in the function body gets executed.

logger();

function fruitProcessor(apples, oranges) {
  const juicer = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juicer;
}

const shit = fruitProcessor(2, 4);
const shit2 = fruitProcessor(1, 4);
console.log(shit, shit2);
console.log(fruitProcessor(1, 4));

const mixedJuice = fruitProcessor(2, 4);
console.log(mixedJuice);
*/

// ********** Function Declaration vs Expressions *******************

//Functin Declaration - These can be invoked before they are defined in the code.
/*
function calcAge1(birthYear) {
  return 2021 - birthYear;
}
const age1 = calcAge1(1976);
console.log(age1);
*/

//Function Expression - A function without a name is called an annonomys function.Can't be invoked before being defined. This is because of hoisting. Matter of personal preference. I think I prefer function expressions. It will force me into defining the function first before I invoke them.
/*
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calcAge2(1976);
console.log(age2);
*/
// ***************** Arrow Functions *****************************
// This is also a function expression. This is also an explicet return. We don't need to write the keyword. This is a good option for simple functions.
/*
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1976);
console.log(age3);
*/
//This is with one parameter
/*
const yearsToRetire = birthYear => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsToRetire(1944));
*/
//What about multipe parameters? We have to wrap arguments.
//What type of function should I use? Arrow functions do not get a .this keyword. So, for now I'll stick with function expressions.

//************ Functions calling other Functions *********** */
/*
function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);

  const juicer = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges.`;
  return juicer;
}

const endResult = fruitProcessor(2, 3);
console.log(endResult);
*/

//*************** Coding Challange 1 *************************** */

// const dolphinsTotal = 44 + 23 + 71;
// const koalasTotal = 65 + 54 + 49;
/*
const dolphinsTotal = 85 + 54 + 41;
const koalasTotal = 23 + 34 + 27;

const calcAverage = scores => scores / 3;
const dolphinsAverage = calcAverage(dolphinsTotal);
const koalasAverage = calcAverage(koalasTotal);
console.log(dolphinsAverage, koalasAverage);

const checkWinner = function (dolphinsAverage, koalasAverage) {
  if (dolphinsAverage >= 2 * koalasAverage) {
    console.log(`Dolphins win with an average score of ${dolphinsAverage}.`);
  } else if (koalasAverage >= 2 * dolphinsAverage) {
    console.log(`Kolas win with an average score of ${koalasAverage}.`);
  } else {
    console.log(`Neither team wins. `);
  }
};
console.log(checkWinner(dolphinsAverage, koalasAverage));
*/

// ************************ Arrays ************************************
// This is our first data structure:
/*
const friends = ["Max", "Rue", "Bai"];
console.log(friends);

//This is a different way to create an Array
const y = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

// Number of elements in array
console.log(friends.length);
//Find last element in array
console.log(friends[friends.length - 1]);
//Add element to the array
friends[2] = "Jay";
console.log(friends);

const hennie = ["Hennie", 45, 2021 - 1976, friends];
console.log(hennie);
*/
//Exercise
/*
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1990, 1967, 1973, 1976];
console.log(years);
const age1 = calcAge(years[2]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

//*********** Basic Array Operations (Methods) *************************** */

// Methods built in function we can use on arrays.
/*
const friends = ["Max", "Rue", "Bai"];
//Add element to end
friends.push("Jacks");
console.log(friends);
//Add element to beginning
friends.unshift("Lola");
console.log(friends);
//Remove element from end
friends.pop();
console.log(friends);
//Remove element from front
friends.shift();
console.log(friends);
//In which position certain element is in the array
console.log(friends.indexOf("Rue"));
// ES6 method = true if element is in the array, otherewise false
console.log(friends.includes("Max"));
console.log(friends.includes("Tina"));
*/

// Coding Challenge 2
/*
const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

console.log(calcTip(400));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];
console.log(total);
*/
// ******************** Intro to Objects *******************************
// We define key/value pairs. This is the object literal syntax.
/*
const hennie = {
  firstName: "Hennie",
  lastName: "Alberts",
  age: "2021 - 1976",
  job: "Entrepeneur",
  friends: ["Bai", "Rue", "Max", "Jacks", "Lola"],
};

console.log(hennie);
*/
// **************** DOT vs Bracket Notation ********************************
//How to retrieve and change data in objects.

// const hennie = {
//   firstName: "Hennie",
//   lastName: "Alberts",
//   age: "2021 - 1976",
//   job: "Entrepeneur",
//   friends: ["Bai", "Rue", "Max", "Jacks", "Lola"],
// };

//Get property from object using DOT Notation. The . is an operator that will go to the propery and get the name that we specified after it.

//console.log(hennie.lastName);

//Using bracket notation
//console.log(hennie["lastName"]);
//Big difference is that in bracket notation we can place an expression inside the brackets. You cant do that with DOT notation.

// const nameKey = "Name";
// console.log(hennie[["first" + nameKey]]);
// console.log(hennie[["last" + nameKey]]);

//When to use DOT vs Bracket notation?
//When we need to compute, use bracket, otherwise bracket notation

// const interestedIn = prompt(
//   "What do you want to know about Hennie? Choose between firstName, lastName, age, job and friends"
// );

//console.log(hennie[interestedIn]);

//I will get a value of undefined if there is no property associated with the object in question. We know undef is a falsy value. Let's use it ot create a custom string the user will get if he tries to acces it.

// if (hennie[interestedIn]) {
//   console.log(hennie[interestedIn]);
// } else {
//   console.log("Sorry, No such thing!");
// }

// Adding new properties to the object ***

// hennie.location = "Utah";
// hennie["dogName"] = "Lola";
// console.log(hennie);

//Write a sentence like 'Hennie has 3 friends and his best friend is called Lola.use multiple dots to get number of friends.

// const test = `${hennie.firstName} has ${hennie.friends.length} friends and his best friend is called ${hennie.friends[0]}.`;
// console.log(test);

// ************************ Object Methods *********************************
// Any function that's attached to an object is called a method.

// const hennie = {
//   firstName: "Hennie",
//   lastName: "Alberts",
//   birthYear: 1976,
//   job: "Entrepeneur",
//   friends: ["Bai", "Rue", "Max", "Jacks", "Lola"],
//   hasDriversLicense: true,

// calcAge: function (birthYear) {
//   return 2021 - birthYear;
// },

//   calcAge: function () {
//     //console.log(this);
//     return 2021 - this.birthYear;
//   },
// };

//   calcAge: function () {
//     return (this.age = 2021 - this.birthYear);
//   },
// };
//console.log(hennie);

// How can I access this method?
//console.log(hennie.calcAge());
//console.log(hennie["calcAge"](1976));

//In every method JS gives us access to a special variable called .this. The .this keyword is equal to object on which the method was called. So Hennie is the object calling the method. What if I have to access this age propery numberous times? I can call this method numerous times, but... it might take up a bunch of memory.Why not calc the age once and store it as a propery of the object?
// console.log(hennie.age);
// console.log(hennie.age);
// console.log(hennie.age);
// console.log(hennie);

//Challange. Write a method getSummary, that summarizes the data. Hennie is a 45 year old entrepenuer, and he has a drivers license. (If it was false it should say not).
/*
const hennie = {
  firstName: "Hennie",
  lastName: "Alberts",
  birthYear: 1976,
  job: "Entrepeneur",
  friends: ["Bai", "Rue", "Max", "Jacks", "Lola"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    const summary = `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }. He ${
      this.hasDriversLicense ? "has a" : "does not have a"
    } driver license.`;
    console.log(summary);
  },
};
console.log(hennie.getSummary());
*/

// ****************** Coding Challange #3 ***********************

/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

john.calcBMI();

console.log(
  mark.BMI > john.BMI
    ? `${mark.fullName} has the highest BMI, coming in at a whopping ${mark.BMI}`
    : `${john.fullName} has the highest BMI, coming in at a whopping ${john.BMI}`
);
*/

// ************************ Iteration: The for Loop ***************************

// Loops are a kind of control structure. They allow us to automate repetitive tasks.

// console.log("Rep 1");
// console.log("Rep 2");
// console.log("Rep 3");
// console.log("Rep 4");
// console.log("Rep 5");

//The for loop - has a counter. The for loop will keep running while middle condition is true.

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting rep ${rep}`);
// }

// Looping through arrays is one of the most useful ways to use loops.

// const friends = ["Max", "Rue", "Bai", 1976, ["Lola", "Maggie", "Eva"], true];
// const types = [];
//Reading from an Array
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i], typeof friends[i]);

//Filling an Array
//types[i] = typeof friends[i];
//types.push(typeof friends[i]);
// }
// console.log(types);

// const years = [1991, 2007, 2020, 1969];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }
// console.log(ages);

// Continue and Break Statements

//Continue is to exit the current iteration and continue to the next

// for (let i = 0; i < friends.length; i++) {
//   if (typeof friends[i] !== "string") continue;
//   console.log(friends[i], typeof friends[i]);
// }
//Let's say we wanted to print only strings
//Break terminates the loop. After a number is found nothing else should be printed.

// for (let i = 0; i < friends.length; i++) {
//   if (typeof friends[i] === "number") break;
//   console.log(friends[i], typeof friends[i]);
// }

//************* Looping Backwards & Loops in Loops ********************* */
/*
const hennie = [
  "Hennie",
  "Alberts",
  1976,
  "Entrepeneur",
  ["Bai", "Rue", "Max", "Jacks", "Lola"],
];

for (let i = hennie.length - 1; i >= 0; i--) {
  console.log(i, hennie[i]);
}

//Create a loop within a loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`___Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights rep ${rep}`);
  }
}
*/

//******************* The While Loop **************************** */
/*
//For loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting rep ${rep}`);
// }

//The while
let rep = 1;
while (rep <= 10) {
  //Loop will run while condition is true
  //console.log(`Lifting rep ${rep}`);
  rep++;
}

//Example that does not depend on counter, but on random variable.

let dice = Math.trunc(Math.random() * 6);
//console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}.`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

//If you need a loop without a counter, then use a while loop. If you need a counter, then use a for loop. 
*/
// ************ Coding Challange 4 **********************************
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  //console.log(bills[i]);
  const calcTip = function (billValue) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      return bills[i] * 0.15;
    } else {
      return bills[i] * 0.2;
    }
  };
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
//console.log(tips);
console.log(totals);
let sum = 0;

const calcAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    //return sum / arr.length;
  }
  //console.log(sum / arr.length);
  return sum / arr.length;
};

console.log(calcAverage(totals));
*/

for (let i = 0; i < 10; i++) {
  console.log("test");
}

let friends = ["Max", "Rue", "Lola", 1978, true, "water"];
console.log(friends);

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

friends.reverse();
console.log(friends);
friends.reverse();
console.log(friends);
