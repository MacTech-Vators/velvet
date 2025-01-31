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


const contactButton = document.getElementById('contactButton');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

contactButton.addEventListener('click', () => {
  contactModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === contactModal) {
    contactModal.style.display = 'none';
  }
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

  
  whatsappButton.addEventListener("click", () => {
    whatsappContact.classList.toggle("hidden");
  });

  
  whatsappForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.getElementById("whatsappMessage").value;
    const phoneNumber = "0659987903"; 

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    whatsappContact.classList.add("hidden");
    whatsappForm.reset();
  });

  
  window.addEventListener("click", (e) => {
    if (!whatsappContact.contains(e.target) && e.target !== whatsappButton) {
      whatsappContact.classList.add("hidden");
    }
  });