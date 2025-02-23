document.addEventListener("DOMContentLoaded", function() {
    console.log("Site ARPI Porto carregado com sucesso!");
    
    let currentIndex = 0;
    const images = document.querySelectorAll('.images img');
    const imagesContainer = document.querySelector('.images');

    // Ensure imagesContainer has a smooth scrolling effect
    imagesContainer.style.transition = "transform 0.5s ease-in-out"; // Smooth transition for scroll

    // Function to scroll left
    function scrollLeft(event) {
        event.stopPropagation();  // Prevent triggering navbar collapse
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Go to the last image if at the first
        }
        updateScroll();
    }

    // Function to scroll right
    function scrollRight(event) {
        event.stopPropagation();  // Prevent triggering navbar collapse
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Go to the first image if at the last
        }
        updateScroll();
    }

    // Update the scroll position of the images container
    function updateScroll() {
        const offset = currentIndex * 100; // Each image takes up 100% of the container width
        imagesContainer.style.transform = `translateX(-${offset}%)`; // Move container to the new position
    }

    // Attach event listeners to buttons (assuming you have left and right buttons in HTML)
    const leftButton = document.querySelector('.left-btn');
    const rightButton = document.querySelector('.right-btn');
    
    if (leftButton) {
        leftButton.addEventListener('click', scrollLeft);
    }
    if (rightButton) {
        rightButton.addEventListener('click', scrollRight);
    }

    // Ensure the navbar toggler icon works correctly
    const navbarToggler = document.querySelector('.navbar-toggler');
    const icon = navbarToggler.querySelector('i');

    navbarToggler.addEventListener('click', function() {
        const expanded = navbarToggler.getAttribute('aria-expanded') === 'true';

        // Toggle the aria-expanded attribute and icon based on the current state
        navbarToggler.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        
        // Toggle the icon to show the correct arrow
        if (expanded) {
            icon.classList.remove('fa-arrow-up');
            icon.classList.add('fa-arrow-down'); // Set down arrow when collapsed
        } else {
            icon.classList.remove('fa-arrow-down');
            icon.classList.add('fa-arrow-up'); // Set up arrow when expanded
        }
    });
});
