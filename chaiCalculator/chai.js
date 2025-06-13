//A javascript file that involves creating a simple calculator that determines the basic ingridients needed to make specific number of cups of Kenyan Chai
//Each cup of lovely Kenyan tea is made of of:-
const water = 200;
const milk = 50;
//1 tablespoon of Tealeaves
const teaLeaves = 1;
//2 tablespoons of sugar
const sugar = 2;
function calculateChaiIngredients() {
    //Prompt function see w3schools documentation
    let person = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    //Convert the user string prompt into number format
    let numberOfCups = Number.parseFloat(person);
    //Check that a valid number input is in place to continue
    if (numberOfCups <= 0) {
        console.log("Couldn't quite your input kindly reenter a valid number to enjoy some heavenly tea");
        return;//Exit the funtion if the input is invalid
    }
    //Calculates the total amount of water, milk, teaLeaves and sugar based on numberOfCups.
    const totalWater = water * numberOfCups;
    const totalMilk = milk * numberOfCups;
    const totalTeaLeaves = teaLeaves * numberOfCups;
    const totalSugar = sugar * numberOfCups;

    //Print output to the console in a clear readable format
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater}`);
    console.log(`Milk: ${totalMilk}`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log(``);
    console.log(`Enjoy your Chai Bora!`);
}