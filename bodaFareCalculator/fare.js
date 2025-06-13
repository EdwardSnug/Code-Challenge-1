//This JS file creates a simple program to estimate the fare for a boda boda ride.
//By default each ride is:-
const baseFare = 50;//In Ksh
const chargePerKm = 15;//KES 15 for every km traveled
function calculateBodaFare(){
    let person = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    //Convert the user string prompt into number format
    let distanceInKm = Number.parseFloat(person);
    //Check that a valid number input is in place to continue
    if (distanceInKm <= 0) {
        console.log("Sjakupata vizuri npigie tena");
        return;//Exit the funtion if the input is invalid
    }
    const totalFare = baseFare + (distanceInKm * chargePerKm);
    //Print output to the console in a clear friendly format
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(``);
    console.log(`Panda Pikipiki!`);
}