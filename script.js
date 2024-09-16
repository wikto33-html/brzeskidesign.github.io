// Select the navbar
const navbar = document.getElementById("navbar");
// Select the logo
const logo = document.getElementById("logo");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    
    // Check if the window width is greater than 768px
    if (window.innerWidth > 768) {
        // If the user scrolls down 100px or more, add the "active" class to the navbar
        if (scrollPosition > 100) {
            navbar.classList.add("active");
        } else {
            // If the user scrolls back up, remove the "active" class
            navbar.classList.remove("active");
        }
    } else {
        // For mobile devices, remove the active class
        navbar.classList.remove("active");
    }
});

// Add a click event listener to the logo
logo.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth' // Smooth scrolling effect
    });
});