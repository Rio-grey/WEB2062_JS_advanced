"use strict";

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interesRate: 1.2, // %
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interesRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interesRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interesRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector("welcome");
const labelDate = document.querySelector("date");

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
///////////////////////////////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];
// SLICE
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b','c']
console.log(arr.slice()); // ["a", "b", "c", "d", "e"]

// SPLICE : làm thay đổi mảng ban đầu
// console.log(ar.splice(2)); // ['c', 'd', 'e']
arr.splice(-1);
arr.splice(1, 2); // ['a','d']
console.log("🚀 ~ arr", arr);

// REVERSE : đảo ngược, làm thay đổi mảng ban dầu
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// CONCAT : nối mảng
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - ")); // a - b - c - d - e - f - g - h - i - j
