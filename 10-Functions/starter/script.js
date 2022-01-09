'use strict';
//newSection: ******** Default Parameters ******************
/*
//Some times it's nice to have parameters set to default. Let's create a booking function
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1 + 3,
  price = 199 * numPassengers
) {
  //This is the old way of setting default parameters. The reason this works is that numPassengers are currently set to undefined, a falsey value, so the or operator will short circuit to true, 1 in this case. This is the ES5 way.
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  //This is the new way of doing it.Came in ES6. Look in the parameters ()

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH233');
//We can override these defaults:
createBooking('LH123', 2, 800);
//NOTE: A couple of cool things about doing default parameters like this:
//We can add any expression in AND we can actually use the value of the other parameters that were set before it. ONLY before.
createBooking('LH23', 5, 8);
//NOTE: We cannot skip a parameter when we call the function
createBooking('LG34', 5);
//If we want to set a parameter to the default we can simply set it to undefined. This works because setting the parameter as undefined is the same as not setting the parameter.
createBooking('LG345', undefined, 99);
*/

//newSection: ***** How Passing Arguments work: Value vs. Reference ******
/*
const flight = 'LH234';
const hennie = {
  name: 'Hennie Alberts',
  passport: 23534324232,
};

//Create a checkin function
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 23534324232) {
    alert('Check in');
  } else {
    alert('Nope');
  }
};
checkIn(flight, hennie);
console.log(flight);
console.log(hennie);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000);
};
newPassport(hennie);
checkIn(flight, hennie);

//passing by value vs passing by reference:
//NOTE: JS does not have passing by reference, only passing by value. This is confusing, but remember that the reference contain a memory address that points to the value.
*/

//newSection: 130: First-Class and Higher-Order Functions
//First class functions enable us to write higher order functions
//A higher order function is a function that receives another function as an argument, that returns a new function, or both. This is only possible because of first-class-functions. NOTE: The function passed into a higher order function is called a callback function. That's because the callback function will be called later by the higher order function.

//NOTE: First class functions vs higher order functions
//first class functions is only a feature that a programming language has. It only means that a function is a value. There are however higher order functions, that's made possible by the first class function feature in JS

//newSection: 131: Functions Accepting Callback Functions
/*
//This is a callback function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

//This is a callback function
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//This is a higher order function
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);
transformer('Javascript is making me sick', oneWord);

//With this we can see that the addEventlistner function is a higher order function. We add a callback function into it. This concept is used all the time in build in javascript functions.

//Why are callbacks used so much in JavaScript and why are they so helpful?
//1. It makes it easy to split our code up into more reusable and interconnected parts.
//2. Callback fuctions allow us to create abstractions. WTF? is that? We hide the detail of some code implementation because we don't need the detail. We abstracted the callback away from the higher order function. The higher order fuction works at a higher level of abstraction, leaving the low level stuff to the callback functions.
*/

//newSection: 132: Functions Returning Function
/*
//Now we'll create a function that'll return a new function.

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`); //greeting comes from greeting on top line. That's because of closure.
  };
};
//Calling the function greet() returned the new function. I stored this new function in a variable and then I can use the variable to call the new function.
//Now this variable is actually a function
const greeterHey = greet('Hey');
//That means we can call this functin just like we would any other function
greeterHey('Hennie');
greeterHey('Max');

//We can also do all of this on one line. First we write greet('Hey'), remember that this is a function, so we can call it immediately.
greet('Hey')('Pieter');

//This becomes useful when we use functional programming.

//Now we will rewrite the greet function using arrow functions

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Willem');
*/

//newSection: 133: The Call and Apply Methods
/*
//Back to the .this keyword and why we would set it manually.

const delta = {
  airline: 'Delta',
  iataCode: 'DL',
  bookings: [],
  book(flightNum, name) {
    //This is the enhanced method syntax, no need to write function
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}` }, name);
  },
};

delta.book(239, 'Hennie Alberts');
delta.book(342, 'Max Alberts');
console.log(delta);

//Here we're creating a new airling company. We can just go ahead and copy the method above, but that is bad practice. What we will do is store it in an external function, then we can reuse that function for all the different airlines. Because JS has first class fucntions this is possible. We store the delta.book method as a variable.
const book = delta.book;

const united = {
  name: 'United Air',
  iataCode: 'UN',
  bookings: [],
};

//This gives an error because it's undefined. The book function is just a regular function call. In a regular function call the this keyword points to undefined. This book function is it's own seperate function. It no longer points to delta.book. It's just a copy, and not a method anymore. That's why the this keyword inside it points to undefined. NOTE: To fix this we need to tell JS explicitly what the this keyword should point to. If we want to book on Delta the this keyword need to point to Delta, if we want to point to United the this keyword need to point to United. How do we do that? See below
//book(23, 'Sarah'); Does not work

//NOTE: There are 3 function methods to do this. Call, Apply and Bind.
//The first argument in the call method is what we want the this keyword to point to.
book.call(united, 23, 'Sarah');
console.log(united);
//We called the called method. This allows us to manually and explicitly call set the this keyword of any function we want to call.

book.call(delta, 232, 'Piet Pielle');
console.log(delta);

//The apply method does basically the same thing. The only difference is that it does not take the group of arguments that the call method takes. Instead it takes an array.

const flightData = [234, 'Hennie'];
book.apply(united, flightData);
console.log(united);

//apply is not used as much. We have a better way. We can still just use call and then use the spread operator to spread the flightData array.

book.call(delta, ...flightData);
console.log(delta);
//NOTE: So always just use the call method and then spread out the array.

//newSection: 134. The Bind Method
//Bind returns a new function where the this keyword is bound. Otherwise it's very similar to the call method.

//Let's say we need to use the book function for United all the time.
//book.call(united, 23, 'Sarah');
//This will not call the book function. Instead it will return a new function where the this keyword will be set to united.
const bookUnited = book.bind(united);
const bookDelta = book.bind(delta);
bookUnited(23, 'Willem Trilvis');
bookDelta(3242, 'Sonja DeJager');

//In the bind method we can also pass multiple arguments. They will be set in stone. The following function books a flight for a preset flight #23.
//TODO: Review this section. Got a little lost
const bookUnited23 = book.bind(united, 23);
bookUnited23('Hendrik Willem Alberts');
//What we did here by specifying part of the argumetn beforehand is called 'Partial Application'. A part of the arguments of the original function is already applied/set. flightNumber above was the partial application.

//Using bind with Objects and eventListeners.
//The plan here is to buy a new plane whenever we click the button on live-server.

delta.planes = 300;
delta.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', delta.buyPlane.bind(delta));
//When I click on the button above I get NaN. So this.planes is NaN. Why is that. It's because the this keyword is now the button element. I an eventHandler function the this keyword always point to the element that handler is attached to. So delta.buyplane function is attached to button element. This makes sense because the eventHandler function is an object. What we need to do is manually define the this keyword in the callback function delta. buyPlane above. How should we do that? We will use bind to do this because we know bind will return a new function. NOTE: Make sure you really understand this and TODO: come back to this to imprint it in your grey matter.

//Partial application Example (preset parameters)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//Now let's say there is one tax we use all the time. We want to add VAT. We can preset the rate to 23% buy using the bind function on the addVAT function. We can preset the rate in addTax to always be 23%.
const addVAT = addTax.bind(null, 0.23); // We write null(standard practice) because we don't need the this keyword bind here. Remeber that the order of arguments is important here. If you want to preset the rate it has to be the second argument in this function.
//The above code will be the same as writing:
//addVAT = value => value + value * 0.23;

console.log(addVAT(100));
//Using bind gives us a new specific function.

//Challenge. Rewrite this, but use the technique of one function returning another function. Create a functin that returns a function that does the same as the addVAT function. TODO: Review this again Hennie

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(200));
*/
//newSection: 135. Coding Challenge #1
/*
Coding Challenge #1

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

Your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:

1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)

1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    //Register Answer. If first is true, then second will be evaluated, if it's till true then third will be executed.
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  //displayResults Method
  // 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // "Poll results are 13, 2, 4, 1".
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
*/
//1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:

//1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this: What is your favourite programming language?
/*
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
*/

//1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
/*
//2. Call this method whenever the user clicks the "Answer poll" button.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerAnswer.bind(poll));

//  5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

//Test data for bonus:
//§ Data 1: [5, 2, 3]
//§ Data 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

//newSection: 136. Immediately Invoked Functions (IIFE)
/*
//We need a function that's only executed once and then never again. After using it dissapears.

const runOnce = function () {
  console.log('This will  run again');
};
runOnce();
//However we can run this later again.

//This is how we do it.

(function () {
  console.log('This will never run again');
})();

//Do the same with an arrow function
(() => console.log('Will also never run again'))();

//Why do we do this? Functions create scopes. One scope does not have acces to other scopes. Innerscope will acces to global but not vice versa. All data defined inside a scopt is private, or encapsulated.

//Variables declared with let/const inside a block is private. var not

{
  //const isPravate = 23;
  //let isPrivate2 = 22;
  var isPrivate3 = 11;
}
console.log(isPrivate3); //This is the only variable that will log, the other two are private.
//The use of the data block with const or var above has taken most of the need out of IIFE, because now we can just create a data block to encapsulate our data. If you really need to execute a function just once than an IIFE is the way to go. Will see one later. 
*/

//newSection: 137. Closures
//A closure is not something that we declare or express. It happens automatically. We just need to recognize those situations.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

//newSection: 138. More Closure Examples

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
