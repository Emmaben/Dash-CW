document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.team-member-card');

    function checkScroll() {
        cards.forEach(card => {
            if (isElementInViewport(card) && !card.classList.contains('show')) {
                card.classList.add('show');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check once on page load
});
