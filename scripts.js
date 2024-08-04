document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    let isPlaying = false;

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

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicToggle.textContent = 'Play Music';
        } else {
            backgroundMusic.play();
            musicToggle.textContent = 'Pause Music';
        }
        isPlaying = !isPlaying;
    });
});
