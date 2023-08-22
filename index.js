const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'clicked' class from all links
        navLinks.forEach(link => link.classList.remove('clicked'));
        
        // Add the 'clicked' class to the clicked link
        this.classList.add('clicked');
    });
});