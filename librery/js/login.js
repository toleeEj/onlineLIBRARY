function validateForm() {
    const emailUsername = document.getElementById('email-username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (emailUsername === '' || password === '') {
        alert('All fields are required!');
        return false;
    }
    
    // Redirect to the provided link after successful validation
    window.location.href = "/homep.html";
    return false; // Prevent form submission
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

// Add the event listener for the LinkedIn button
document.getElementById('linkedin-btn').addEventListener('click', function() {
    window.location.href = "https://www.linkedin.com/in/tolesa-ejara-401025253/";
});
