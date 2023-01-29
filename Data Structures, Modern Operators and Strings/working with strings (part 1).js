const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length); // 16
console.log("B737".length); // 4

console.log(airline.indexOf("r")); // 6
console.log(airline.lastIndexOf("r")); // 10
console.log(airline.indexOf("portugal")); // -1

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(" "))); // TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portugal

const checkMiddleSeat = function (seat) {
  // B abd E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😁");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas")); // object
console.log(typeof new String("jonas").slice(1)); // string
