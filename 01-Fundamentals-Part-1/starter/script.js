// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);

// let firstName = "Jonas";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "test");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);


// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990; // Error: Assignment to constant variable.

// // const job; // Error: Constant must be initialized.

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Schmedtmann';
// console.log(lastName);

// // Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// // // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);


// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);


// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century); // Error: century is not defined

// type conversion
// const inputYear = '1991';
// console.log(inputYear + 18);
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number('Jonas'));
// console.log(typeof Number('Jonas'));

// console.log(String(23), 23);

// type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');


// let n = "1" + 1; // the number 1 is converted to a string
// n = n - 1; // the string "11" is converted to a number
// console.log(n); // 10

// // 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 11;
// if (money) {
//     console.log("don't spend it all ;)");
// } else {
//     console.log("You should get a job!")
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }


// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');
// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt('What is your favorite number?'));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else if (favourite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?'); // !== is strict inequality operator
// if (favourite != 23) console.log('Why not 23?'); // !== is loose inequality operator


// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

// const age = 15;
// age >= 18 ? console.log("I like to drink wine!") : console.log("I like to drink water!");

// const drink = age >= 18 ? 'Wine!' : "Water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'Wine!';
// } else {
//     drink2 = 'water!';
// }
// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? 'wine!' : "water"}`)