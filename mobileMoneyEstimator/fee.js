//This JS file creates a simplified estimator for transaction fees
//Basic transaction fee rate in decimal format
const transFeerate = 0.015;//1.5%
const minFee = 10;//Kes 10
const maxFee = 70;//Kes 70
//start of Javascript function
function estimateTransactionFee() {
    let person = prompt("Unatuma Ngapi? (KES):");
    //Convert the user string prompt into number format
    let amountToSend = Number.parseFloat(person);
    //Check that a valid number input is in place to continue
    if (amountToSend <= 0) {
        console.log("Please enter a valid amount to continue, TRY AGAIN!");
        return;//Exit the funtion if the input is invalid
    }
    //Calculate the transaction fee 
    const transFee = (amountToSend * transFeerate);
    //Variables that will be used to store our charges
    let calcTransFee, totalAmtDebit;
    //If ... else code blocks to set our conditions
    //First If block check if transaction fee is less than the minimum fee
    //Second block checks if the transaction fee is less than or equal to the maximum fee
    //Final block checks if transaction fee is greater than the maximum fee
    if (transFee < minFee) {
        calcTransFee = 10;
    } else if (transFee <= maxFee){
        calcTransFee = transFee;
    }else if (transFee > maxFee){
        calcTransFee = maxFee;
    }
    totalAmtDebit = calcTransFee + amountToSend;
    //Printing our results to the console
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calcTransFee}`);
    console.log(`Total amount to be debited: KES ${totalAmtDebit}`);
    console.log(``);
    console.log(`Send Money Securely!`);
} 