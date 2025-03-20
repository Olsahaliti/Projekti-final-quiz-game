document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('login-btn');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginButton.addEventListener('click', function() {
        const email = emailInput.value;
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (email === "" || username === "" || password === "") {
            alert("Please fill in all fields.");
        }
    });
});
