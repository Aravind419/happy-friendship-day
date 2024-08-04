document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Add active class to the clicked card
            card.classList.add('active');

            // Add animation based on index (for variety)
            if (index % 2 === 0) {
                card.style.animation = 'slideInFromLeft 0.5s forwards';
            } else {
                card.style.animation = 'slideInFromRight 0.5s forwards';
            }

            // Apply fade-in scale animation to all cards
            card.style.animation = 'fadeInScale 0.5s forwards';
        });
    });
});
