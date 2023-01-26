// Loại bỏ các giá trị trùng lặp của mảng
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }

console.log(new Set("Jonas")); // Set(5) { 'J', 'o', 'n', 'a', 's' }

console.log(ordersSet.size); // 3
console.log(ordersSet.has("Pizza")); // true
console.log(ordersSet.has("Bread")); // false
ordersSet.add("Garlic Bread");
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto', 'Garlic Bread' }
ordersSet.delete("Risotto");
// ordersSet.clear(); // Xóa tất cả
console.log(ordersSet[0]); // undefined

for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)]; // thành mảng rồi
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
console.log(new Set("ledinhquy").size);
