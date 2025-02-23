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
});

// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Select the navbar toggle button and the navbar collapse
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Add click event to the toggle button
    navbarToggle.addEventListener('click', function () {
        // Toggle the 'show' class on the navbar collapse for smooth transition
        navbarCollapse.classList.toggle('show');
    });

    // Ensure the navbar is correctly visible or hidden based on initial state
    if (window.innerWidth >= 1024) {
        navbarCollapse.classList.add('show');  // Ensures the navbar is open on desktop
    }
});
