// src/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded!');

    // Dark mode toggle functionality could go here
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;

    toggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });
});