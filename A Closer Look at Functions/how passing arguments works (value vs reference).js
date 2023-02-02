const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH199";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport");
  }
};
checkIn(flight, jonas);
console.log("🚀 ~ flight", flight);
console.log("🚀 ~ jonas", jonas);

// Is the same as doing ...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
