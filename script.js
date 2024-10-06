// Select the navbar container
const navbarContainer = document.querySelector('.navbar-container');
const navbar = document.querySelector('.navbar');

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
        navbarContainer.classList.add('scrolled'); // Change the design of navbar container
    } else {
        navbar.classList.remove('sticky'); // Remove sticky class when on page1
        navbarContainer.classList.remove('scrolled'); // Revert the design of navbar container
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section id
        const targetSection = document.querySelector(targetId); // Find the target section

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Align the section to the top of the viewport
        });
    });
});
