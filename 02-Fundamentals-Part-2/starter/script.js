'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log("My name is Jonas");
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// const num = Number('23');

// // Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = calcAge2(1991)
// console.log(age1, age2)


// // Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retired in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of oranges.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 3))

// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }


// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retried in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1
//     }

//     // return `${firstName} retired in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


// // Challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// // console.log(scoreDolphins, scoreKoalas)

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins > 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
//     } else if (avgKoalas > 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
//     } else {
//         console.log(`No team wins....`)
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas)


// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0])
// console.log(friends[2])
// console.log(friends.length) // gives the number of elements in this case 3
// console.log(friends[friends.length - 1])

// friends[2] = 'Jay';
// console.log(friends)

// // friends = ['Bob', 'Alice'] // gives an error "Assignment to constant variable."
// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmass', 2037 - 1991, 'teacher', friends]
// console.log(jonas)
// console.log(jonas.length)


// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages)

// const friends = ['Michael', 'Steven', 'Peter'];
// ////// .push is like python's list .append method
// friends.push('Jay'); // adds to the end of the list
// // const newLength = friends.push('Jay'); // adds to the end of the list and returns the length of the new array

// console.log(friends)
// // console.log(newLength)

// friends.unshift('John')
// console.log(friends)

// friends.pop(); // remove the last element
// const popped = friends.pop(); // returns the popped element
// console.log(friends);
// console.log(popped);

// friends.shift(); // remove the first element
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Bob'))

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }


// //// Challenge #2

// function calcTip(billValue) {
//     return (billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20)
// }

// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills)
// console.log(tips)
// console.log(totals)


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']); // the value in the bracket can be any expression

// const nameKey = 'Name';
// console.log(jonas[`first${nameKey}`])
// console.log(jonas[`last${nameKey}`]) // this does not work with the dot notation

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')
// // console.log(jonas.interestedIn);
// console.log(jonas[interestedIn]);


// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman'
// console.log(jonas)


// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)



// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: false,
//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear
//     // }

//     // calcAge: function () {
//     //     // console.log(this)
//     //     return 2037 - this.birthYear
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
//     }
// };

// console.log(jonas.calcAge(1991));
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// // console.log(jonas['calcAge'](1991));


// // Challenge
// // "Jonas is a 46-years old teacher, and he has a/no driver's license"

// console.log(jonas.getSummary())


// console.log('Lifting weights repetition 1');

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = []

// for (let i = 0; i < jonas.length; i++) {
//     // Reading from jonas array
//     console.log(jonas[i], typeof (jonas[i]))

//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i])
// };

// console.log(types)

// const years = [1991, 2007, 1969, 2020]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages)


// /// continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof (jonas[i]))
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof (jonas[i]))
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} lifting weights repetition ${rep}`)

//     }
// }


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// };


// let rep = 1;

// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// };


// let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1
//     if (dice === 6) console.log('Loop is about to end...')
// }

//// Challenge #4
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// /* Write your code below. Good luck! 🙂 */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i])
//     totals[i] = bills[i] + tips[i]
// }

// function calcAverage(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum / arr.length
// }

// console.log(totals)
// console.log(calcAverage(totals))