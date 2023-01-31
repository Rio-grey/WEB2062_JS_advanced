// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log("🚀 ~ newName", newName); // Mr. Jonas SCHMEDTMANN

const capitalizedName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // cách 2
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizedName("jessica ann smith davis");
capitalizedName("jonas schmedtmann");

// Padđing
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+")); // +++++++++++Go to gate 23!
console.log("Jonas".padStart(25, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(594237958743985));
console.log(maskCreditCard("349749869287985321123"));

// Repeat
const message2 = "Bad weather... All Departues Delayed...";
console.log(message.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
planesInline(5);
planesInline(3);
planesInline(12);
