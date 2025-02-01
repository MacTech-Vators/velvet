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



setInterval(() => {
  currentIndex = (currentIndex + 1) % controls.length;
  updateCarousel();
}, 5000);

const learnMoreButton = document.querySelector(".bg-gold-500");
  const learnMoreSection = document.getElementById("learnMoreSection");

  learnMoreButton.addEventListener("click", () => {
    learnMoreSection.classList.toggle("hidden");
    learnMoreButton.textContent = learnMoreSection.classList.contains("hidden")
      ? "Learn More"
      : "Show Less";
  });




const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent.');
  contactForm.reset();
  contactModal.style.display = 'none';
});

const whatsappButton = document.getElementById("whatsappButton");
const whatsappContact = document.getElementById("whatsappContact");
const whatsappForm = document.getElementById("whatsappForm");


whatsappButton.addEventListener("click", (e) => {
  e.stopPropagation();
  whatsappContact.classList.toggle("hidden");
});


window.addEventListener("click", (e) => {
  if (!whatsappContact.contains(e.target) && e.target !== whatsappButton) {
    whatsappContact.classList.add("hidden");
  }
});


whatsappForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.getElementById("whatsappMessage").value.trim();
  const phoneNumber = "0659987903";

  if (message) {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }
  whatsappContact.classList.add("hidden");
  whatsappForm.reset();
});
