document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-submit');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password-submit');
    const userPassword = passwordField.value;

    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        window.location.href = 'banking-page.html';
    }
})
