"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

// TH mà muốn lấy cái thứ 3 mà bỏ qua cái thứ 2
// const [first, , second] = restaurant.categories;
// console.log(first, second);

// chuyển đổi thứ tự của chúng - Switching variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Cách thông thường:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Cách dùng destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [stater, mainCourse] = restaurant.order(2, 0);
console.log(stater, mainCourse);

// Nếu thế nào nếu mảng lồng nhau ? - Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
