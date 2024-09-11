const projectCards = document.querySelectorAll('.project-card');
let currentSlide = 0;

function showSlide(index) {
    projectCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? projectCards.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide === projectCards.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

// Initialize the first slide
showSlide(currentSlide);




