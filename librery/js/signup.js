function validateSignupForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields are required!');
        return false;
    }
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return false;
    }

    // Redirect to the provided link after successful validation
    window.location.href = "/homep.html";
    return false; // Prevent form submission
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    if (!validateSignupForm()) {
        event.preventDefault();
    }
});
