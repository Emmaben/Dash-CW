const activePage = window.location;
const navLinks = document.querySelectorAll('nav ul li a');
const mobileNavLinks = document.querySelectorAll('div ul li a');

navLinks.forEach(link => { // Corrected forEach loop placement
    if(link.href === activePage.href){ // Changed the condition
        link.classList.add('active');
    } else {
        link.classList.remove('active'); // Remove active class from other links
    }
});

mobileNavLinks.forEach(link => { // Corrected forEach loop placement
    if(link.href === activePage.href){ // Changed the condition
        link.classList.add('active');
    } else {
        link.classList.remove('active'); // Remove active class from other links
    }
});
