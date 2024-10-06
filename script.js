// Select the navbar container
const navbar = document.querySelector('.navbar-container');

// Select the "About" section (page1)
const aboutSection = document.querySelector('#page1');

// Create a function to handle the scroll behavior
window.addEventListener('scroll', () => {
    // Get the scroll position of the page
    const scrollPosition = window.scrollY;
    
    // Get the position of the "About" section (page1)
    const aboutSectionTop = aboutSection.offsetTop;
    
    // Check if the user has scrolled past the About section (page1)
    if (scrollPosition >= aboutSectionTop) {
        navbar.classList.add('sticky'); // Add sticky class when scrolled past About section
    } else {
        navbar.classList.remove('sticky'); // Remove sticky class when on page1
    }
});
