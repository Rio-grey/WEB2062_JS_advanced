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
