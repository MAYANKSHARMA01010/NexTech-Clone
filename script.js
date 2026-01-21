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
