'use strict';

// Demonstration on different scopes in JS
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating NEW variable with the same name as outer scope's variable
      var millennial = true;

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const firstName = 'Steven';
      const str = `Oh, and you're a millennial, ${firstName}`;
      //   var str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millennial);
    // console.log(str);
    // const and let cannot be accessed but var can be accessed
    // const and let will give ReferenceError cannot be accessed
    // (if creates a block variable scope)
    // the scope of this function is only the block that it was defined in
    //   add(2, 3); // ReferenceError called outside the if block scope
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

/*
// Hoisting Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Hoisting Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // It will result in ReferenceErorr if it's defined with const
// console.log(addArrow(2, 3)); // It will result in ReferenceErorr if it's defined with const
console.log(addExprVar); // Undefined
console.log(addArrowVar); // Undefined
// console.log(addExprVar(2, 3)); // You cannot call an undefined function (i.e. undefined(2,3))

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addExprVar = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addArrowVar = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();
// all products will be delete although we have 10 products in the cart
// this happens because of hoisting
// at this point of the code the numProducts variable is in fact not 10 but undefined
// which is a falsy value
// This a reason for not using var

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// Best Practices
// 1. Never use var
// 2. Use const to declare your variables
// 3. Use let only if you variables will change
// 4. Declare your variables at the top of your code
// 5. Always declare your functions first and only use them after declaration
*/

console.log(this); // simply is the 'window' object

const clacAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // will be undefined because we are in strict mode
  // in sloppy mode it will be the global object in this case the window object
  // this is for function that is not attached to any object
};
clacAge(1991);

const clacAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // will be the global 'window' object
  // this is because the arrow function don't get their own 'this' keyword
  // the arrow function simply used the lexical this keyword
  // which means it used the this keyword of its parent function or the parent scope
  // in this case the parent scope is the global scope
};

clacAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // will be the jonas object
    console.log(2037 - this.year);
  },
};
jonas.calcAge(); // this this keyword points to the object calling it
// in this case jonas object
// below matilda will be calling the method

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // this copies the calcAge method from jonas
// to matilda, this is called method borrowing
matilda.calcAge();

const f = jonas.calcAge;
f(); // this will be just like a regular function, the this function will be
// undefined and hence give an error
