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

    // calculation
    const totalExpences = foodExpense + rentExpense + clothsExpense;
    const newBalance = incomeAmount - totalExpences;
    // display 
    totalExpencesDisplay.innerText = totalExpences;
    totalBalanceDisplay.innerText = newBalance;

   
})

document.getElementById('btn-savings').addEventListener('click', function(){
    const savingsField = convertStringToNumberById('savings-percent-field');
    const incomeAmount = convertStringToNumberById('income-field');
    const savingsDisplay = document.getElementById('savings-amount-display');
    const remainingBalanceField = document.getElementById('remaing-balance-field');
    
    // savings amount calculation
    const percent = savingsField / 100;
    const savingsAmountPoint = incomeAmount * percent ; 
    const savingsAmount = savingsAmountPoint.toFixed(2);
    savingsDisplay.innerText = savingsAmount;

    // remaining balance
    const remainingBalance = incomeAmount - savingsAmount;
    remainingBalanceField.innerHTML = remainingBalance;

})