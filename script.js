// Carousel Logic
const carousel = document.getElementById('carousel-items');
const controls = document.querySelectorAll('.carousel-control');
let currentIndex = 0;

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  controls.forEach((control, index) => {
    control.classList.toggle('bg-gold-500', index === currentIndex);
    control.classList.toggle('bg-gray-300', index !== currentIndex);
  });
}

// Auto-rotate carousel every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % controls.length;
  updateCarousel();
}, 5000);

// Contact Form Logic
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  successMessage.classList.remove('hidden');
  contactForm.reset();
});
