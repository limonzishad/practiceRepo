document.getElementById('deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-money');
    const depositAmount = depositField.value;
    console.log(depositAmount);
});
document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-money');
    const withdrawAmount = withdrawField.value;
    console.log(withdrawAmount);
});