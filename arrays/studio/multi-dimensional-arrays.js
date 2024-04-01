let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
let cargoHold = [[food], [equipment], [pets], [sleepAids]]
let input = require('readline-sync');
let selectCabinet = input.question("Select a cabinet.")
let itemCabinet = input.question("Check cabinet for item");

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold.concat[food, equipment, pets, sleepAids]

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
console.log(`${selectCabinet}${input}`)
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (input === "0") {
    console.log(`Here you go\n${cargoHold[0]}`)
}  if (input === "1") {
    console.log(`Here you go\n${cargoHold[1]}`)
}  if (input === "2") {
    console.log(`Here you go\n${cargoHold[2]}`)
}  if (input === "3") {
    console.log(`Here you go\n${cargoHold[3]}`)
}  else {
    console.log(`Get out.`)
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

//select for a cabinet and item 
console.log(`${itemCabinet}${input}`)

//state it does or does not have item in cabinet 
if (input === "0") {
    console.log(`Here you go\n${cargoHold[0]}`)
}  if (input === "1") {
    console.log(`Here you go\n${cargoHold[1]}`)
}  if (input === "2") {
    console.log(`Here you go\n${cargoHold[2]}`)
}  if (input === "3") {
    console.log(`Here you go\n${cargoHold[3]}`)
}  else {
    console.log(`Get out.`)
}