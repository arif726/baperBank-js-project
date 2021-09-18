//deposite amount

document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = depositeInput.value;

    const currentDeposite = document.getElementById('deposite-current');
    const totalDepositeAmount = parseFloat(depositeAmount) + parseFloat(currentDeposite.innerText);
    currentDeposite.innerText = totalDepositeAmount;

    //Total balance

    const currentBalance = document.getElementById('current-balance');
    const totalBalance = parseFloat(depositeInput.value) + parseFloat(currentBalance.innerText);
    currentBalance.innerText = totalBalance;

    //Clear inputfield

    depositeInput.value = '';
})

//Withdraw Amount

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    const currentWithdraw = document.getElementById('withdraw-current');
    const totalWithdrawAmount = parseFloat(withdrawAmount) + parseFloat(currentWithdraw.innerText);
    currentWithdraw.innerText = totalWithdrawAmount;

    //Total balance

    const currentBalance = document.getElementById('current-balance');
    const totalBalance = parseFloat(currentBalance.innerText) - parseFloat(withdrawInput.value);
    if (parseFloat(withdrawAmount) > parseFloat(currentBalance.innerText)) {
        alert('insufficient amount');
    }
    currentBalance.innerText = totalBalance;

    //Clear inputfield

    withdrawInput.value = '';

})