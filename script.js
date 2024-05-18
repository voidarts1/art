document.addEventListener("DOMContentLoaded", function() {
    const messages = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messages.appendChild(messageElement);
            messageInput.value = '';
        }
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform login (this would involve server-side processing)
        alert('Login submitted!');
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform signup (this would involve server-side processing)
        alert('Sign Up submitted!');
    });
});
