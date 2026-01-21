// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');
const html = document.documentElement;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

function updateIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Select elements to animate
    const animatedElements = document.querySelectorAll('.hero-content, .about-text, .about-image, .portfolio-item, .contact form, .section-subtitle, h2');

    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in-up');
        // Add slight delay for grid items
        if (el.classList.contains('portfolio-item')) {
            el.style.transitionDelay = `${index % 3 * 0.1}s`;
        }
        observer.observe(el);
    });
});
