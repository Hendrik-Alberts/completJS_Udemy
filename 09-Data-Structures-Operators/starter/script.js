'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //Here the parameters of the object I'm passing into the function is being destructured immediately. The properties do not have to be in the order of the preperties in the object. They are reference values. I also added default values to starterIndex, mainIndex and time. That would let these values default to these values if I dont have them in the object. What makes this valuable is that the user does not have to worry about the order in which the arguments are passed in, as long as they match. I get this. JUst need some more practice. It also goes without saying that I can now set default values on this.
  //NOTE:
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  orderDelivery: function ({
    address = [],
    time = 1300,
    starterIndex = 0,
    mainIndex = 0,
  }) {
    console.log(starterIndex, mainIndex, address, time);
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address})`
    );
  },
  //NOTE:
};

//In the orderDelivery method above we passed an object into the function and then passed an object of options into the function as seen below. This is pretty common in 3rd party libraries, because now we can do destructuring right away. So what I'm saying is look above at orderDilivery NOTE:
restaurant.orderDelivery({
  time: '2230',
  address: '2052 Tay',
  //mainIndex: 2, //By ommiting this it used the default '0' above
  starterIndex: 2,
});
//{
//It's important to realise that we get this string, based on the data I passed into the objext 'orderDelivery'. I only passed ONE object as an argument into the function. MAKE SURE YOU GET THIS!!!!
// console.log(
//   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
// );
//},
//This method will always order pasta and the pasta will always only have 3 ingredients.
// orderPasta: function (ing1, ing2, ing3) {
//   console.log(`Here's your pasta with ${ing1}, ${ing2}, ${ing3}.`);
// },
//Here we're creating a method for pizza ordering. Every pizza needs at least one ingredient and ten the ...rest of them. The rest operator is perfect to accomplish this.
// orderPizza: function (mainIngredient, ...otherIngredients) {
//   console.log(mainIngredient);
//   console.log(otherIngredients);
// },

/*
//If I want to destructure this array I need to declare a new variable for each. like const a = arr[0] etc. There's an easier way.

const arr = [2, 3, 4, 5];
//To destructure we include the names of the variables in [] and set it equeal to the array itself. Whenever JS sees the [] on the left of the equal sign it know it is the detructure assignment and it will destructure. The original array is not affected. NOTE: Destrucruring is a way to extract values from arrays/objects and bind them to variables.

const [a, b, c, d] = arr;
console.log(a, b, c, d); //2 3 4 5

//here I'm only getting the first and last element out of the array. Note how I left spaces in the destructure statement.
const [f, , , j] = restaurant.categories;
console.log(f, j);
//What if i wanted to change the order in which elemts appeared in an array? Say I want to change the order of steak and potatoes.
const myFood = ['Steak', 'Potatos', 'Egg'];
let [m, n] = myFood;
[m, n] = [n, m];
console.log(m, n); //Potatoes, Steak

//Now I want to practice using a method to destructure an array when we call it.
// const hennie = {
//   firstName: 'Hennie',
//   lastName: 'Alberts',
//   friends: ['Max', 'Rudi', 'Rue', 'Dawie'],
//   enemies: ['Fat', 'Food', 'Cold', 'Woman'],
//   goals: function (friend, enemy) {
//     return [this.friends[friend], this.enemies[enemy]];
//   },
// };
//So here I took the goals method above and destructured it into two variables, names and fear. I could do that because hennie.goals()returned an array as per the function definition. A handy way when we return two variables from a function to immediatly destructure.

console.log(hennie.goals(0, 2)); //[Max, Cold]
const [names, fear] = hennie.goals(2, 3);
console.log(names, fear);

//So now how do we deal with nested arrays? Say I want to destructure value [0] and the whole nested array.
const nested = [1, 2, 3, 4, [5, 6, 7], 8, 9];
const [, i, , , k, ,] = nested;
console.log(i); //2
console.log(k); //[5, 6, 7]

//All fine and dandy, but is there a way to do this and extract values from within the nested part? Then we have to do destructurig within destructuring.
const [w, , , , [r, s, t], ,] = nested;
console.log(w, r, s, t);

//We can also set default values for the array. This becomes useful when we don't know how long the array is. In the following example imagine you don't know the length of the array.

// const [h, u, v, z] = [5, 43, 3];
// console.log(h, u, v, z); //This will give us undefined for value z
//So it's evident from the above code that we should use default values in here. In that case if an element does not exist, it will automatically be assigned to the default value.

const [h = 1, u = 1, v = 1, z = 1] = [5, 43, 3];
console.log(h, u, v, z); //Now the value of z = 1, because it diverted to the default value that I assigned to it. Yes. I get this section really well now. NOTE: This technique becomes super useful when getting data from an API. This is because we don't neccesarily know the length of an array in the API.

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sol 33',
  mainIndex: 2,
  starterIndex: 3,
});

//This object shows how the default values I used in the function obove would pick the dafault values if not specified.
restaurant.orderDelivery({
  address: '2051 Taylore Ave',
});
*/
//Newsection: ************** Destructuring Objects **************************
/*
//Because the order does not matter in objects we don't need to add placeholders like we do in arrays.
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//What if we wanted the variable names to be different from the property names? We just use a colon after the propery name and can then rename the variable. This will be very helpful when starting to deal with 3rd party data.

const hennie = {
  firstName: 'Hennie',
  lastName: 'Alberts',
  friends: ['Max', 'Rudi', 'Rue', 'Dawie'],
  enemies: ['Fat', 'Food', 'Cold', 'Woman'],
  goals: function (friend, enemy) {
    return [this.friends[friend], this.enemies[enemy]];
  },
};
//So here I destrucrured this object, It's important to enter the property names exactly as they are declared in the object. Then you can change it after the :. As you can see the order is not important here.
const { lastName: van, firstName: naam, goals, friends: areThey = [] } = hennie;
console.log(van, naam, goals, areThey);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//We can set default values, just like in arrays. In these lines following we set menu to an open array. If menu did'nt exist it would be set to an open array, otherwise the values would be assigned. We also reassign starterMunu to starters and set it as an open array for the same reason. Clear as mud??? Good! Now move on.

//Here I destructured the array and renamed some of the variables with the :. The property vriende does not exist, but I did set it's default parameter to [].In fact all of them have default values assigned to them.
const {
  firstName: eersteNaam = [],
  vriende = [],
  friends: chommas = [],
} = hennie;
console.log(eersteNaam, vriende, chommas);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables while destructuring objects
//In this example we want to mutate the two variable to take the values of a and b in the object. We can't start the line with {}, because JS will expect a code block. This will give us a syntax error. What we need to do is wrap the code in ();

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//{a, b} = obj; //This will give syntax error. The reason for this is that JS sees the {} and expects a code block. We cannot assign a code block.
({ a, b } = obj);
console.log(a, b);

//Nested Objects
// Let's say we want to create two variable, open and close. These should contain the open and closed times for Fridat. Looking at the object, Friday is an object contained within the openingHours object, that's again contained within the restaurant object. In this example I also assigned new variable names to open and close. o, and c respectively.

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
// Newsection: ************ Destructuring Arrays *************************
/*
// Destructuring is an ES6 feature that allows you to unpack arrays and objects and assign their values to variables. Break a complex data structure down.

//This is all the work you would have to do if you manually destructured this array.
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//This is how we would destructure the array from the right side.
const [x, y, z] = arr; //The [] is a destructuring assignment.
console.log(x, y, z);
console.log(arr);

//In this example I wanted to select the first two.
// const [first, second] = restaurant.categories;
// console.log(first, second);

//Now let's say I want to select the first and third only.
let [first, , third] = restaurant.categories;
console.log(first, third);

//Let's say we want to change the order of the catogories.
[first, third] = [third, first];
console.log(first, third);

//We can have a function return an array and then immediately destructure that array.
console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//Now what happens if we have a nested array?
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//the above only gives me the values of [0] and [2], but what if I wanted all the values of the array. Then I would need to do destructuring within destructuring.
const [i, , [j, k]] = nested;
console.log(i, j, k);

//We can set default values for the values when we extract them. This is helpful if we don't know the size of the array. In the bottom array we assign the default value of 1 to each value. If the value is = 1, then that lets us know the value is not in the array. This can be useful id we get data fro an API for example.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
//NewSection:      ********** The Spread Operator (...) **************

// see also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

//Use to expand an array into all it's elements. Let's use this example in the bottom. If we wanted to add 1, and 2 to it we would have to iterate over the array like this.

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//Using the Spread Operator
//As you can see, the spread operator takes the array, and expands it into its individual elements. The same as we wrote above. So we would use the spread operator if we would otherwise write multiple values seperted by commas.The two biggest examples are when we would write an array literal, or when we would pass arguments into fuctions.
const newArr = [1, 2, ...arr];
console.log(newArr);
//As can be seen from the bottom CL, we get the elements seperated.
console.log(...newArr);

//Now we will create an array with one more food item in the main menu array. Note that we are creating a new array here and not just manupulating the original array.

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//NOTE: The spread operator takes all the elements out of the array, but it does not create new variables. We can only use it in the places where we would otherwise write values seperated by commas.

//Two important use cases of the Spread Operator

//1. Create shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//2. Merge two or more arrays together
const joinedMenus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(joinedMenus);

//The Spread Operator works on all iterables. An iterable is things like arrays, strings,maps, sets. Not objects!!!
//Now we will use the SO on a string...

const str = 'Hennie';
const letters = [...str, ' ', 's'];
console.log(letters);

//Now we will write a function that will accept multiple arguments, and then use the SO to pass those arguments. This will be from the orderPasta functin written above. The 3 ingredients will come from a prompt window.

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
//So how do we call the orderPastaFunction now?

//restaurant.orderPasta(...ingredients);

//Since ES2018 the spread operator also works on objects, even thought objects aren't iterables. In this example I use the SO tho copy the old object (restaurant) into the newRestaurant object. Note that this also copied all the methods.
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Hennie' };
console.log(newRestaurant);

//We can also do shallow copies of objects with the SO

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Spur';
console.log(restaurantCopy);

//newSection: ******** Rest Pattern and Parameters *********************

/*
//Looks exactly like the spread operator but does the opposite. It collects multiple elements and then condence them into an array. Packs them into an array.

//We know this is the spread syntax because we use it on the righthand side of the assignment operator.
//const arr = [1, 2, ...[3, 4]];

//Rest, because on the left side of the assignment operator. It's called rest, because it will take the rest of the elements (the remaining) of the array and put them in a new array, called others in the following example.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
//The rest syntax collects all the array values after the last variable. Does not include any skipped elements. It must always be the last in the destrucring assignment. That's the only way for JS to know that it should collect the rest of the array. There can only be one rest in any destructuring assignment.

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//REST in Objects - Same as an array, except that the remaining elements will be collected into a new objext.In this example we will only select Sat from our openingHours, and the rest will go into a weekday.

const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

//Rest in Functions - The rest operator in functions allow us to set up the parameters so we can accept any number of parameters as showed below.
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(4, 6, 5, 7, 8, 9, 2);

//So how would we use the add function to call these 3 values? We simply use all the numbers of the array and spread them in the function call. This is the same as manually writing (23, 5, 7);
const x = [23, 5, 7];
add(...x);

//Now we will write another mehod orderPizza. See code at top.
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spiniach');
//If we only call the mainIngredient we will get it and then an empty array. See the console.log for this code.
restaurant.orderPizza('mushrooms');

//Now to recap the difference between spread and rest: Spread and Rest work in opposite ways, depending where they are used. The spread operator is used where we would otherwise write values, seperated by a comma. On the other hand the rest operator is used where we would write variable names, seperated by commas.
*/

//newSection: *************** Short Circuiting (&& and || **************)
/*
//the result of the or operator does not always need to be a boolena as is evident by this log. There are 3 properties of logical operators:

//1. They can use any data type
//2. They can return any data type
//3. Short-Circuiting / Short Circuit Evaluation
//Short circuiting means that if the first value is a truthy value it will immediatly return that first value (as far as the or operator).
console.log('--------------- OR ________________');
console.log(3 || 'Hennie'); //3
console.log('' || 'Hennie'); //Hennie
console.log(true || 0); //true
console.log(undefined || null); //null is also falsy, but gets returned since the first value was falsy too.

//Hello is returned here because it's the first truthy value.
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//More practical application. We want to check if restaurant.numGuests exist, if not we set it equal to 10;
//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//We can write the same code as above like this short circuiting. When guests1 is commented out restaurant.numGuests will evaluate to undefined(falsy), it will then assign 10 the variable. When we acitvate restaurant.numguests it truthty and returned immediately. Neither of these will work if numGuests = 0. That's because 0 is falsy.

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('--------------- OR ________________');

//Now let's look at the short-circuiting of the && operator.
console.log('--------------- AND ________________');
//Works in the opposite way of the or operator.
console.log(0 && 'Hennie');
//The && operator returns the first falsy value it encounters
console.log(7 && 'Hennie');
console.log('Hello' && 23 && null && 'Hennie');

//Below we are using the if statement to see if restaurant.orderPizza exist, and if it does to pring to the console
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

//We can use the && operator to attain the same here.
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'cheese');
*/

//newSection: ********** The Nullish Coalescing Operator (??) ***********
/*
//In this example from the previous code, JS will assign the value of 10 to guests. This happens becuause 0 is a falsy value, then the || moves to the next value wich is 10. This is obviously an issue since if the number of guests were really 0 we would need that.

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//This is what the ?? operator looks like. It was introduced ES20. The operator works with the concept of nullish values as opposed to falsy values.
//Nullish values are: null and undefined (Not 0 or ''.)

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

//newSection: ************** Logical Assignment Operators *****************
/*
//In ES2021 three new logical assignment operators were introduced to the language.

//We have two objects here and we want to set the default number of guests for all objects who do not have that property.

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'Capri',
  owner: 'Max',
};

//We can do this using the || operator. This works because of short-cictuiting as we already mentioned up above.

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1);
// console.log(rest2);

//We can do this better with the 'OR Assignment' operator.
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

//We however have the same issue when it comes to the value 0 as we did in the previous section. We can solve this with the following: The Logical Nullish Assignment Operator (??=) (null or undefined). The Nullish Assignment Operator will assign a value to a variable if that particuler value is nullish.

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

//We also have the Logical AND Assignment Operator (&&=). To show how that works, let's say that we want to find out if there is a restaurantOwner in the data, if we fing it we want to replace the string with annonomys.

//using what we know already

// rest1.owner = rest1.owner && '<Annonymous>';
// rest2.owner = rest2.owner && '<Annonymous>';
// console.log(rest1);
// console.log(rest2);

//We can replace the duplicate variable with the Logical AND Operator. So remember that the Logical && operator assigns a value to a variable if it is currently truthy.

rest1.owner &&= '<Annonymous>';
rest2.owner &&= '<Annonymous>';
console.log(rest1);
console.log(rest2);
*/

//newSection: ************* Coding Challenge # 1 *************************

//console.log('-------------- Coding Challenge # 1 -------------------------');
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.

Your tasks:

1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.

Then, call the function again with players from game.scored
GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Create variables for each team
const [players1, players2] = game.players;
//const [[], [...players2]] = game.players;
//console.log(players1, players2);

//2. Create variables gk for goalkeeper and players for rest, only in team 1.

const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);

//3. Create array allPlayers with all the players in.
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus'Thiago', 'Coutinho' and 'Perisic'.

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(players1Final);

//5. 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in).

//Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.

//Then, call the function again with players from game.scored

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator. The team with the lower odd is more likely to win. We will use the && operator here, because it returns if the first value is true.

team1 < team2 && console.log(`Team 1 is more likely to win.`);
team1 > team2 && console.log(`Team 1 is more likely to win.`);
*/

//newSection: ************ Looping Arrays: The for-of Loop **********************
/*
//Introduced in ES6. Now we want to loop over this array.

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for loop
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

//for of loop - Note that we don't need to create a code block if we only have one statement to execute.
for (const item of menu) console.log(item);
//This loop will loop through the array and with every iteration it will give us access to the var 'item'. We can still use the continue and break keywords.

//What if we also need the current index? It's a pain in the ass with the for of loop.

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//the menu.entries creates an array, that contains a seperate array and index for each value.
console.log([...menu.entries()]);

//We can now use this data to print to the console.
*/

//newSection: ****************** Enhanced Object Literals ************************
/*
//ES6 introduced 3 ways to make it easier to writo object literals
//1. When we write a function outside an objext, we only need to reference the name of the variable in the object, followed be a comma to reference it and add it to the object. ex:

const food = [2, 3, 4];
const foodObj = {
  pizza: 23,
  food,
};
console.log(foodObj);

//2. When we write a method we can do shorthand now:
// const water = {
//   quantity: 1000,
//   calcWater: function () {
//     console.log('test');
//   },
// };

//this is the new syntax:

const water = {
  quantity: 1000,
  calcWater() {
    console.log('test');
  },
};

//3. We can now compute property names instead of writing them out manually or literally.

const days = ['mon', 'thues', 'wed', 'thur', 'fri', 'sat', 'sun'];
const waterDays = {
  mon: 8,
  [days[1]]: 9,
  wed: 2333,
};
console.log(waterDays);
*/

//newSection: ******************* Optional Chaining (?.) ***********************
/*
//Was introduced on ES2020. Lets say we wanted to get the opening hours for our restaurant on Monday. Let's pretend we dont know if theis restaurant is open on Mondays or not. This could be the case if this data came from a web API. There could be multiple restaurants.

//This if statement only checks for one property (mon). Imagine now that opening hours is also optional. How can we do it then? We would have to add an && to the if statement. You can see how this could easily get out of hand if hou had deeply nested objects. That's where optional Chaining can come in to the rescue. With ?. if a certain property does not exist then undefined is returned immediately. That will then avoid the error message.

//Without Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//This will work because fri excists.
// if (restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }

//With Optional Chaining
//How this reads: Only if propery before operator exist, then the property after will be read. If not, undefined will be returned. A property exists if it's not null and not undefined.
console.log(restaurant.openingHours.mon?.open);
//console.log(restaurant.openingHours.mon.open); //This will give error

//We can have multiple optional chainings. So, in this code if .openingHours does not exist, we won't event read the code to the right. This is a good way to handle some bugs that we might not expect.
console.log(restaurant.openingHours?.mon?.open);

//Now let's look at a more real-world example.
//I want to loop over this array and then log to the console if the restaurant is open or closed on eace of the days.
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//Using a for loop
// for (let i = 0; i < days.length; i++) {
//   console.log(days[i]);
// }

//Using the for of loop

//We have an issue here when we get to Saturday. The restaurant is open from 0000 to 2400 to indicate it's open 24 hours. This zero value triggers a falsy value though and that makes the value default to closed. What can we do to fix this?. We use the ?? operator as discussed abode to fix this issue.These two were introduced during ES2020, because they were announced to work well together.Both of them rely on nillish values.

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Optional Chaining in Methods.
//We can check if a method exists before calling it. If it returns undefined it immediately goes to the second operand.

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist!');

//Optional Chaining on Arrays

//We can use it to check if an array is empty.

const users = [{ name: 'Hennie', email: 'hennie@hotmail.com' }];
console.log(users[0]?.name ?? 'User array empty.');
*/

//newSection: ************ Looping Objects: Object Keys, Values, & Entries ******************
/*

// We looped over arrays which are iterables, but we can also loop over objects (not iterables), but in an indirect way. Do we wan to loop over properies, values or both?

//Let's start by looping over propery names (keys).

//This will give me an array with the 3 days
const properties = Object.keys(openingHours);
console.log(properties);

//Let's print a string with the days the restaurant is open
let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

//Now let's look at property values:
//To simulate looping over the whole object we need the entries. We did .entries in an earlier lecture. Entries are names and values together.

const values = Object.values(openingHours);
console.log(values);

//Note: Entries Object -  This basically transforms the object into an array.
const entries = Object.entries(openingHours);
//console.log(entries);

//Now we can use this to loop over the object and create a string. I'll need to destructure to get the key, open and close variables. {open, close} was the value htat got destructured. I'm a little fuzzy here!!!! note:

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}. `);
}
*/

//newSection: ************ Coding Challenge 2 ********************
/*
Coding Challenge #2

Let's continue with our football betting app! Keep using the 'game' variable from
before.

Your tasks:

1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉

4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:

{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Loop over the game.scored array and print each player name to the console,along with the goal number (Example: "Goal 1: Lewandowski")
const goals = game.scored;

// for (let i = 0; i < goals.length; i++) {
//   console.log(goals[i]);
// }

for (const [i, el] of goals.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}
console.log([goals.entries()]);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//the goals.entries creates an array, that contains a seperate array and index for each value. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

//odds is a method game.odds, containing 3 key: value pairs. The actual odd number is the value. So I have to iterate over the values and then divide it by the same number of iteratios. I'll start be writing a for of loop:

// const properties = Object.keys(openingHours);
// console.log(properties);

const aveOddsValues = Object.values(game.odds);
console.log(aveOddsValues);
// const entries = Object.entries(game);
// console.log(entries);

// Now I'll use a for of loop like the one at the botton here to iterate through aveOddsValues.

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}. `);
// }
//const entries = Object.entries(openingHours);
//console.log(entries);

// for (let i = 0; i < aveOddsValues.length; i++) {
//   console.log(aveOddsValues[i]);
// }
let total = 0;
for (const element of aveOddsValues) {
  total += element;
}

console.log(`The average odd is ${total / aveOddsValues.length}`);

//3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

//Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

// const entries = Object.entries(game);
// console.log(entries);
// for (const [key, { team1, x, team2 }] of entries) {
//   console.log(key, team1, x, team2);
// }

//This is his solution: I fucked up. .entries basically takes the objext and turns it into an array, allowing me to loop over it. NOte: So we use the Object.entries and pass into that function the object we are interested in. This is different than question 1. There we used .entries directly with the array, but now that we want the object out we use Object.entries.

for (const [team, o] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(team, o);
  console.log(`Odd of ${teamStr} ${o}`);
}

//NOTE: The whole team string is still fuzzy. I need to understand this code better.
*/

//newSection: ************************** Sets ******************************
/*
//In ES6 two more data structures were introduced in addition to arrays and objects. They are Sets & Maps.
//A set is collection of unique properties. A set can never have duplicate values.To create we use the 'new Set' keywords. Set need to be stored inside iterables, so we place it inside an array.

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Pasta',
  'Risotto',
]);
console.log(ordersSet);
//All the duplicates are gone in the log. The order of the elements are irrelevant. Strings are also iterables.
console.log(new Set('Hennie'));
//The set could also be empty
console.log(new Set());

//Now let's start working with sets.

//First of we could get the size of a set: Note that it's size and not lengtn like it is in arrays. This will give a number.

console.log(ordersSet.size); //3

//Check if an element is in a set? We can use the has method. It's similar to the inludes method in arrays.

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

//Add new elements to a set: What if we added the same thing twice? You guessed it genuis. Only one get's added.
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

//Delete elements
ordersSet.delete('Risotto');
console.log(ordersSet);

//Now we will look at ways to retrieve values out of a set. In sets there are no indexes. There's no way to get values out of a set. That makes sense? We do have the has method to check if a value is present inside a set. If your goal is to store values and then retrieve it, it's best to use an array.

//This last method will delete all the elements of a set with the .clear method

//ordersSet.clear();
console.log(ordersSet); //[]

//As we said in the beginning, sets are iterables and we can loop over them.
//NOTE: I want you to look again at this code below and remember that when we have a single expression we can do it on one line of code.
for (const order of ordersSet) console.log(order);

//Now let's look at a big use case of sets. It's actually to remove duplicate values of arrays.

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//Let's say now we are interested in knowing what different positions are in our restaurant. You guessed it wiseass. We can use a set.

//const staffUnique = new Set(staff);
// console.log(staffUnique);

//We want this to be an array, so we will convert it from a set to an array.
//Remember that the spread operator works on all iterables? Yes it does. Let's unpack this set, it will then be placed into a newly constructed array.

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//If we only wanted to know how many different properties there are, then the size property is very useful.
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

//Another handy use is to calc how many unique letters there are in a string. Let's look at that:

console.log(new Set('hendrikwillemalberts').size); //14

//Sets are not intended to replace arrays. Arrays are also to be used when we want to manupulate data. They are not nearly as important as arrays. 
*/

//newSection: **************** Maps Fundamentals *****************************
/*
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//A map is a data structure is used to map values to keys. In maps the keys can have any type. You can see that this is huge advantage. In objects the keys can only be strings, whereas in maps the keys can be any type. It can even be objects, arrays or other maps.
//The easiest way to create a map is to start with an empty map, like this.
const rest = new Map();

//Now we use the set method to fill up the map. The first value is the key name, the second the value. The set method is very similar to the .add method we used in sets.
rest.set('name', 'Spur Steakhouse');
rest.set(1, 'Cape Town');

//Calling the set method like this doesn't only update the map, but it also returns the map.
console.log(rest.set(2, 'Lisbon'));

//Because of the update feature we can just chain sets together. Like this example shows.
rest
  .set('catagories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

//In order to read data we use the .get method. This is available on all maps.
//Also remeber that data type matters here when we try to get the the data.
console.log(rest.get('name')); //Spur Steakhouse
console.log(rest.get(true)); //We are open

//Now let's look how we can use these boolean keys to make life easier. You live in America now. Life is supposed to be so easy.
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//The above is clever, but not very readable. Don't overuse.

//Next we will look at a method to check if a map contains a certain key.
console.log(rest.has('catagories'));

//Delete a key is also simple
rest.delete(2);
console.log(rest);

//Maps also have the size property
console.log(rest.size);

//Use this to clear contents of the map.
//rest.clear();
//console.log(rest);

//We can use arrays and objects as map keys.
const arr = [1, 2, 3];
//rest.set([1, 2, 3], 'test');
rest.set(arr, 'test');
console.log(rest);

//How would be get the dat based on this array we just passed in?
//console.log(rest.get([1, 2, 3]));
console.log(rest.get(arr));
//NOTE: The above will give me a value of undefined. Look at the previous section - Primitives vs Objects. The reason for this is that these two arrays are not the same object, even if written the same. They are not the same object in the heap. The key value here is the object that we created in the rest.set([]) line of code. It's NOT the object we referenced when we used the .get method. Even though we wrote it the exact same. Make sense? Yes, but still need some work here. In order for this to work we have to create an array and store it in a var. That array will now be used .

//With this we proved that we can use objects as keys. This is very useful with dom elements, which is just a special type of object.

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/

//newSection: ******************* Maps: Iteration ***************************
/*
//We can also populate a map with a different way in addition to the .set method. Let's look at that now.

const question = new Map([
  ['question', 'Best programming lang.'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);

console.log(question);

//This is an array of arrays. We've seen this structure before in objects
console.log(Object.entries(openingHours));
//The above also create an array of arrays.

//With knowing the above there's an easy way to convert from objects to maps.
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Next we'll look at iteration. Iteratioin is possible on maps because they are iterables. Rember when we write this loop to write what it is we want to loop over first. In this case that will be 'question'.
console.log(question.get(`question`));
for (const [key, value] of question) {
  //We use the typeof number here because we only want to print the 3 questions and all 3 of them have numbers as keys.
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}. `);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

//Now we can use the boolean values to print the correct or wrong error message. NOTE: I need to look at this more and understand using the power of booleans as keys.
//console.log(question.get(question.get('correct') === answer));

//Sometimes we need to converts a map back into an array.We can do this by building a new array and then unpacking it (using the spread operator.)
console.log([...question]);
//We also have the other methods on arrays that we can use here.
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//When should I use maps and when objects? That's what the next lecture is about. 
*/

//newSection: ************* Which data structure to use ********************
//Data can come from one of 3 sources:
//1. From the progrma itself: Data written into source code (eg.status message)
//2. From the UI:Data from user or data in dom (eg. todo, budgeting etc)
//3. From external sources: Data fetched from web API (eg. recipe objects)

// Collections of data get stored in JavaScript data structures

/*
Web API data come in format called JSON. It's basically a long string, but it can easily be turned into a JS Object. If we look at typical data from an API we'll see that there are objects stored within objects. When we decide what data structure to use we will decide if a simple list(array/sets) will suffice or if we need key/value(Objext/Maps) pairs. This is the reason we see so many data structures as an array of objects. 

NOTE: There are 2 other build in JS data structures. WeakMap and WeakSet. More in these in a later lecture. Other programming languages have multiple others. 
*/

/*
Arrays vs Sets
Use in simple list when you don't need to describe the values. 
Use Arrays when needed to be stored in order, and when values contain duplicates. Also use arrays when you need to manupulate data. 
Use Sets when working with unique values, when high performance is NB (up to 10x faster in sets than in arrays) and to remove duplicates from arrays. 
*/

/*
Objects vs Maps
Use them when we need to describe the key. What is it we are storing. What label do we want to put on it. We've always used objects for this because maps were only introduced in es6. Using objects have some technical disadvantages. For this reason some people say we've been abusing Objects for this reason. Advantage - easy to write and access data. Most developer used to objects. 

Maps on the other hand, offer better performance, have any data type, easier to iterate and to compute size. 

Use maps when you need to map keys to values, and when keys are not strings. 
Use objects when you need methods and when working with JSON files. 

*/

//newSection: ************ Coding Challange #3 ****************************
/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)
//This smells like a set

//Converts map to array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

//So below is how I would've written this initially.
//const events = new Set(gameEvents.values());

//The I forgot to unpack it. Rember adding the [] because I want to unpack it into an array.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

//3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

//To calc the average I'll take the total game time / number of events?
//console.log(Math.round(90 / 9));
//console.log(gameEvents.size);
console.log(
  `An event happened , on everage, every ${90 / gameEvents.size} minutes.`
);

//4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//[FIRST HALF] 17: ⚽ GOAL

//Start by looping over Map and logging to console
let time = [];
for (const [key, value] of gameEvents) {
  if ([key] <= 45) {
    time = 'First Half';
  } else {
    time = 'Second Half';
  }
  console.log([time]);

  console.log(`${[time]} ${key}: ${value}`);
}
//This gave me access to keys and values.

//I need an if statement to create an array called

// const time = [...gameEvents.keys()];
// console.log(time);
*/

//newSection: ******* Working with Strings *********************
/*
const airline = 'Tap Air SA';
const plane = 'Boing 747';

//Just like in arrays we can get the character of a string in a certain position:
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B727'[1]);

//Read the length property?
console.log(airline.length);
console.log('B4343'.length);

//Now let's look at some string methods. They are very similar to the array methods.
//indexOf()

console.log(airline.indexOf('A'));
//This will only give us the first occurance, sometimes we might need the last one.
console.log(airline.lastIndexOf('A'));

//Search for entire words(This is case sensitive!)
console.log(airline.indexOf('Air')); //4

//What can we use this for? One good use is to extract part of a string using the .slice method. The slice method need indexes as arguments. The first argument passed in is where the slice method starts to extract. The second is where it will end. The end value is not included in the string. The length of the substring will always be 'end - beginning'. 2 in this case. This does not change the original string.
console.log(airline.slice(4, 6)); //Ai - called a substring

//We can use these now to find indexes of strings we don't know yet. Below started at position zero and wanted to get the first word. That way we are looking for the first occurance of the ' ' space in the sentence.
console.log(airline.slice(0, airline.indexOf(' ')));
//In this one we extract the last word. We don't need the end parameter because it will extract everyting to the end. The plus one is added to get rid of the space.
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//When we enter a negative value it will start extractin from the end.
console.log(airline.slice(-2));
//Here we start at position 1 'a' and cut it off at position -1, which is just the last character.
console.log(airline.slice(1, -1));

//Let's write a function that receives a seat and returns if it's a middle seat or note.

const checkMiddleSeat = function (seat) {
  //B and E are the middle seats, so what we want to do is check if the string we receive contain a B or an E. By using -1 it will begin counting the last letter.
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('middle');
  } else {
    console.log('not');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Why do strings have methods when they are primitives. Whenever we call a method on a strinh JS will convert the string to an object. This is called boxing. Now that allows us to call a method on a string. When the operation is done the object is converted back to a regular string primitive.
console.log(new String('Hennie'));
//All string methods return primitives, even if calles on a string object.
console.log(typeof new String('Hennie').slice(1));
*/
//newSection: *************** Strings Cont. ****************************
/*
//changing case of string.
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
//Can also be called directly on a string
console.log('hennie'.toUpperCase());

//let's fix capitalization in passenger name
const passenger = 'hEnnie'; //Hennie
//First take to lower case
const passengerLower = passenger.toLowerCase();
//Now first letter(index 0) to uppercase, then + the rest, sliced at index 1.
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Now write a function where argument is a name. If the name is screwed up, fix it.

const nameFixingThing = function (name) {
  const lower = name.toLowerCase();
  const fixed = lower[0].toUpperCase() + lower.slice(1);
  return fixed;
};
console.log(nameFixingThing('wIlleM'));
console.log(nameFixingThing('mAX'));
console.log(nameFixingThing('Hennie'));
//Good job African, let's move on

//Comparing user input email
const email = 'hennie@hotmail.com';
const loginEmail = ' henNIe@hotmaiL.coM \n';

// const lowerMail = loginEmail.toLocaleLowerCase();
// console.log(lowerMail);
//Now we have to get rid of white space and enter. There is a method for that called trim()
// const trimmedMail = lowerMail.trim();
// console.log(trimmedMail);

//We can do all of this in one step. A string is returned, so we can go ahead and call another method on it immediately.
const normalEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalEmail);
console.log(email === normalEmail);

//TODO: There is also trimStart and TrimEnd. We can use this to trim white space from the start or the end.

//How to replace parts of strings. Here we wan to convert the ZAR to USD. We need to change the , to a . and the ZAR to USD. The .replace method can also replace entire words.

const priceSA = '288,97ZAR';
const priceUS = priceSA.replace('ZAR', 'USD').replace(',', '.');
console.log(priceUS);

const announcement = 'All Passengers report to gate 1; I repeat gate 1';
//console.log(announcement.replaceAll('gate', 'door'));
//If I used .replace above it would've only replaced the first occurance of 'gate', but replaceAll does exactly what is says.

//TODO: Start looking at the 'regular expression' To use a regular expression we need to write the string between //, and not ''. We also add the g-flag after the /. This stands for global.
console.log(announcement.replace(/gate/g, 'door'));

//3 Methods that return Booleans
const airPlane = 'A23neo';
console.log(airPlane.includes('A23')); //true
console.log(airPlane.startsWith('boing')); //false
console.log(airPlane.startsWith('A')); //true

if (airPlane.startsWith('A2') && airPlane.endsWith('eo')) {
  console.log('new plane');
} else {
  console.log('Olde plane');
}

//Practice. Check if baggage from certain passenger is allowed on the plane
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('No boarding for you');
  } else {
    console.log('Welcome fucker');
  }
};
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camers');
checkBaggage('Got some snacks, and a gun for protection');
*/
//newSection: ************* Strings 3 **************************
/*
// Split -- Allows us to split a string into multiple parts based on a divider string. The result is stored in an array.

console.log('a+very+nice+string'.split('+'));
console.log('Hennie Albert'.split(' '));
const [firstName, lastName] = 'Hennie Alberts'.split(' ');
//Make uppercase and add Mr, in beginning

//Join is basically to opposite of split
const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//Function to cap first letter of each name
//TODO: I need to recap this. He lost me in this function.
const capName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    console.log(namesUpper.join(' '));
  }
};
capName('jessica ann smith davis');

//Padding a string - Add a nuber of characters to the string until the string has a certain disired length.
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));

//Real world example. Using a cc we only see last 4 nubers

const maskCreditCard = function (number) {
  const str = number + ''; //Easy way to convert number to string
  console.log(typeof str);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard('12345678123423232323434'));
console.log(maskCreditCard(344252342341234));

//Repeat method - Allows us to repeat the same string multiple times

const message2 = `Bad weather. All departures delayed! `;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'plane'}`);
};
planesInLine(5);
*/

//newSection: ************ Challenge #4 ************************
/*
Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):

underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉

§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const row of rows) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
});
//NOTE: Come back to this. Lecture 124 at 10:01

//newSection: ******** Strings more Challange ****************
//NOTE: Also come back to this at a later time.
