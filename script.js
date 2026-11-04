// This script listens for a click on the button in index.html
const greetBtn = document.getElementById('greetBtn');

if (greetBtn) {
    greetBtn.addEventListener('click', function() {
        alert('Hello! Thanks for clicking. You are officially interacting with JavaScript!');
    });
}
