document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'admin@bank.com' && userPassword == '123') {
        window.location.href = './banking.html';
    }
    else {
        alert('invalid user email or password');
    }
});