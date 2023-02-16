function convertStringToNumberById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value ;
    const inputFieldNumber = parseFloat(inputFieldString);
    return inputFieldNumber;
}

const totalExpencesDisplay = document.getElementById('totalExpence-field');
const totalBalanceDisplay = document.getElementById('balance-field');

document.getElementById('btn-calculate').addEventListener('click', function(){
    //all inputs in calculation part
    const incomeAmount = convertStringToNumberById('income-field');

    const foodExpense = convertStringToNumberById('food-field');
    const rentExpense = convertStringToNumberById('rent-field');
    const clothsExpense = convertStringToNumberById('cloths-field');

   
    // validation Number or Not 
    if(isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothsExpense) || foodExpense < 0 || rentExpense < 0 || clothsExpense < 0){
        return alert('Please provide a number');
    }

    // calculation
    const totalExpences = foodExpense + rentExpense + clothsExpense;
    const newBalance = incomeAmount - totalExpences;

    if(totalExpences > incomeAmount){
        return alert('You have not enough money to expence. Cut your coat according to your cloth');
    }

    // display 
    totalExpencesDisplay.innerText = totalExpences;
    totalBalanceDisplay.innerText = newBalance;

   
})

document.getElementById('btn-savings').addEventListener('click', function(){
    const savingsField = convertStringToNumberById('savings-percent-field');
    const incomeAmount = convertStringToNumberById('income-field');
    const savingsDisplay = document.getElementById('savings-amount-display');
    const remainingBalanceField = document.getElementById('remaining-balance-field');
    
    // valisation  
    if(isNaN(savingsField) || savingsField < 0 ){
        return alert('Please provide a valid Number');
    }

    // savings amount calculation
    const percent = savingsField / 100;
    const savingsAmountPoint = incomeAmount * percent ; 
    const savingsAmount = savingsAmountPoint.toFixed(2);
    savingsDisplay.innerText = savingsAmount;

    // is less or more validation 
    if(savingsAmount > incomeAmount){
        return alert('Not enough money for savings. You need to earn more money');
    }
    // remaining balance

    const newBalanceField = document.getElementById('balance-field');
    const newBalancebString = newBalanceField.innerText;
    const newBalance = parseInt(newBalancebString);

    const remainingBalancePoint = newBalance - savingsAmount;
    const remainingBalance = remainingBalancePoint.toFixed(2);
    remainingBalanceField.innerText = remainingBalance;

})