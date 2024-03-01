// EXAMPLE 1 - Check if a String is Empty in JavaScript

const str = '';

if (typeof str === 'string' && str.length === 0) {
  // 👇️ this runs
  console.log('The string is empty');
} else {
  console.log('The string is NOT empty');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Handling strings that only contain spaces

// const str = '   ';

// if (typeof str === 'string' && str.trim().length === 0) {
//   // 👇️ this runs
//   console.log('The string is empty');
// } else {
//   console.log('THe string is NOT empty');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Checking if a string isn't empty

// const str = 'bobbyhadz.com';

// if (str) {
//   // if this code block runs
//   // str is NOT "", undefined, null, 0, false, NaN
//   console.log('The value is truthy');
// } else {
//   console.log(
//     'The value is undefined, null 0, false, NaN or empty string',
//   );
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Checking if a string isn't empty or contains only whitespace

// const str = '      ';

// if (typeof str === 'string' && str.trim() !== '') {
//   console.log('The string is NOT empty');
// } else {
//   // 👇️ this runs
//   console.log('The string is empty');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Checking if a value is falsy

// const str = 'bobbyhadz.com';

// if (!str) {
//   console.log(
//     'The value is undefined, null 0, false, NaN or empty string',
//   );
// } else {
//   // 👉️ str is NOT "", undefined, null, 0, false, NaN
//   console.log('The string is truthy');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Checking if a value is an empty string, undefined or null

// const str = '';

// if (typeof str === undefined || str === null || str === '') {
//   // 👇️ this runs
//   console.log('The value is undefined, null or empty string');
// } else {
//   console.log(
//     'The value is NOT undefined, null or empty string',
//   );
// }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Checking if a value is NOT an empty string, undefined or null

// const str = 'bobbyhadz.com';

// if (typeof str !== undefined && str !== null && str !== '') {
//   // 👇️ this runs
//   console.log(
//     'The value is NOT undefined, null or empty string',
//   );
// } else {
//   console.log('The value is undefined, null or empty string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 7 - Checking if a value is empty using lodash

// import _ from 'lodash';

// console.log(_.isEmpty(null)); // 👉️ true
// console.log(_.isEmpty(undefined)); // 👉️ true
// console.log(_.isEmpty('')); // 👉️ true
// console.log(_.isEmpty([])); // 👉️ true
// console.log(_.isEmpty({})); // 👉️ true
// console.log(_.isEmpty(true)); // 👉️ true

// console.log(_.isEmpty('abc')); // 👉️ false
// console.log(_.isEmpty(['a', 'b'])); // 👉️ false
// console.log(_.isEmpty({a: 'b'})); // 👉️ false
