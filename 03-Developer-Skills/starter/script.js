// Remember, we're gonna use strict mode in all scripts now!
// ctrl + c to close the node.js live server
'use strict';

// PROBLEM 1:

// We work for a company building a smart home thermometer.
//  Our most recent task is this: "Given an array of temperatures of one day,
//  calculate the temperature amplitude.
//  keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is tempt amplitude?
// Answer: difference between the highest and lowest temperature
// - How to compute max and min temperatures?
// - What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// function calcTempAmplitude(temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// }

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temperatures
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice?
// NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays?

// function calcTempAmplitudeNew(t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// }

// const amplitudeNew = calcTempAmplitudeNew(
//   [3, 4, 5, -1, 12],
//   [1, 32, 42, 56, 22]
// );
// console.log(amplitudeNew);

////////////////////
// !Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays
a string with these temperatures.

Example: [17, 21, 23] will print "... 17C in 1 days ...21C in 2 days
...23C in 3 days"

Create a function 'printForecast' which takes in an array 'arr' and logs 
a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into
sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// const temps1 = [17, 21, 23];
// const temps2 = [12, 5, -5, 0, 4];

// function printForecast(arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) str += `... ${arr[i]} in ${i + 1} day `;
//   console.log(str);
// }

// printForecast(temps1);
// printForecast(temps2);

//! Coding Challenge #2 (With AI)

/*
Let's say you're building a time tracking application for freelancers. At some
point in building this app, you need a function that receives daily work hours
for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

const weekHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) sum += array[i];
  return sum;
}

function calcAverage(array) {
  const count = array.length;
  return sumArray(array) / count;
}

function analyzeWorkWeek(array) {
  const totalHoursWorked = sumArray(array);
  const averageDailyHours = calcAverage(array);
  const longestWorkDay = Math.max(...weekHours);
  const daysWorked = array.length;
  let fullTime = false;
  if (totalHoursWorked >= 35) {
    fullTime = true;
  }
  return {
    'Total Hours Worked': totalHoursWorked,
    'Average Daily Hours': averageDailyHours,
    'The day with the most hours worked': longestWorkDay,
    'Number of days worked': daysWorked,
    'Worked 35 hours or more': fullTime,
  };
}

// console.log(sumArray(weekHours));
// console.log(calcAverage(weekHours));

// console.log(Math.max(...weekHours));
console.log(analyzeWorkWeek(weekHours));
