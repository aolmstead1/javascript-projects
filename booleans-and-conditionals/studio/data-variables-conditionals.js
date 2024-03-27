// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTemplCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = "100%"
let weatherStatus = "clear"
let preparedForLiftOff = false
let divider = "------------------------------------------"  

    console.log("Assessing pre-liftoff requirements...\n", divider +"\n", date +"\n",time)
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("Too many astronauts!");
    preparedForLiftOff = false;
}   else {
    console.log("There are a normal amount of astronauts.");
}
// add logic below to verify all astronauts are ready
if (astronautStatus != "ready") {
    console.log("The astronauts refused!");
    preparedForLiftOff = false;
}   else {
    console.log("The astronauts are good to go.")
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    console.log("Total mass EXCEEDED")
    preparedForLiftOff = false;
}   else {
    console.log("Total mass NOT exceeded")
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTemplCelsius < -300 || fuelTemplCelsius > -150) {
    console.log("Fuel temperature irregular.")
    preparedForLiftOff = false;
}   else {
    console.log("Fuel temperature normal!")
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel level 100%.")
}   else {
    console.log("Fueling required!")
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather is clear.")
}   else {
    console.log("Weather does not meet standard.")
    preparedForLiftOff = false;
}
    console.log(divider)
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff == false) {
    console.log("Cannot liftoff at this time. Hold out astronauts!")
}   else {
    console.log("Prepare for liftoff. Have fun astronauts!")
}