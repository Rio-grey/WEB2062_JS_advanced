const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

console.log(isPrivate); // không thể hoạt động được

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log("🚀 ~ isPrivate", isPrivate);
console.log("🚀 ~ notPrivate", notPrivate);
