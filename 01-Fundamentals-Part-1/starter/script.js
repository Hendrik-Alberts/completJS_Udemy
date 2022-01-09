// let country = "South Africa";
// let continent = "Africa";
// let population = "2000000";

// console.log(country, continent, population);

// Data Types:
/*
There are 7 Primitive Data Types:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt
JS has dynamic typing. JS determines dynamic typing automatically
*/

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/
// let massMark = 78;
// let massJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;

// let bmiCalcMark = massMark / heightMark ** 2;
// console.log(bmiCalcMark);

// let bmiCalcJohn = massJohn / heightJohn ** 2;
// console.log(bmiCalcJohn);

// console.log((markHigherBMI = bmiCalcMark >= bmiCalcJohn));

// Template Literals
/*
const firstName = "Hennie";
const job = "Paramedic";
const birthYear = 1976;

const hennie = `I'm ${firstName} and I'm a ${job}. I am ${
  2021 - birthYear
} old.`;
console.log(hennie);
*/

//Coding Challenge 2

/*
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let bmiCalcMark = massMark / heightMark ** 2;
console.log(bmiCalcMark);

let bmiCalcJohn = massJohn / heightJohn ** 2;
console.log(bmiCalcJohn);

console.log((markHigherBMI = bmiCalcMark >= bmiCalcJohn));

if (bmiCalcMark > bmiCalcJohn) {
  console.log(`Mark has the highest BMI at ${bmiCalcMark}`);
} else {
  console.log(`John has the highest BMI at ${bmiCalcJohn}`);
}
*/

// const age = 18;
// if (age === 18) console.log("adult");

// const fav = prompt("fav");
// console.log(fav);
// console.log(typeof fav);

//******** Boolean Logic ******** */

// const hasDriverLicence = false;
// const hadGoodVision = false;

// console.log(hasDriverLicence && hadGoodVision);
// console.log(hasDriverLicence || hadGoodVision);

// Coding Challange 3 ********************

/*


const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);
if (averageScoreDolphins > averageScoreKoalas) {
  console.log(`Dolphins win with score of ${averageScoreDolphins}`);
} else if (averageScoreDolphins < averageScoreKoalas) {
  console.log(`Koalas win with score of ${averageScoreKoalas}`);
} else if (averageScoreKoalas === averageScoreDolphins) {
  console.log(`Draw, both team ${averageScoreKoalas}`);
}
*/
let billAmount = 430;

let tip =
  billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2;

console.log(
  `The bill was $${billAmount}, the tip was $${tip}. The bill total was $${
    billAmount + tip
  }.`
);
