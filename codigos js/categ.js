const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function moveCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    } else if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }

    const itemWidth = carouselItems[0].offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
