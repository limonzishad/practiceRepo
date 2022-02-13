document.getElementById('deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-money');
    const depositAmount = depositField.value;
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotal.innerText;
    const updatedDepositTotal = parseFloat(depositAmount) + parseFloat(previousDepositTotal);
    depositTotal.innerText = updatedDepositTotal;
    depositField.value = '';
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const updatedBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(depositAmount);
    balanceTotal.innerText = updatedBalanceTotal;
});
document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-money');
    const withdrawAmount = withdrawField.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotal.innerText;
    const updatedWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(previousWithdrawTotal);
    withdrawTotal.innerText = updatedWithdrawTotal;
    withdrawField.value = '';
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    const updatedBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);
    balanceTotal.innerText = updatedBalanceTotal;
});