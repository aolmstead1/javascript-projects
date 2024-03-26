// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let marsDistance = 225000000;
let moonDistance = 384400;
const milesKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof marsDistance);
console.log(typeof moonDistance);
console.log(typeof milesKilometer);

// Calculate a space mission below

let milesToMars = marsDistance * milesKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(shuttleName + " will take " + daysToMars + " days to reach the Moon.");

// Calculate a trip to the moon below

let milesToMoon = moonDistance * milesKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");