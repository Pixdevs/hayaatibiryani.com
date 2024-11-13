// Toggle navigation menu and hamburger icon animation
function toggleMenu() {
    const nav = document.querySelector('header nav');
    const hamburger = document.querySelector('.hamburger-menu');
    nav.classList.toggle('active');
    hamburger.classList.toggle('open');
}

//Carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-image");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// Modal
function openModal(imgElement) {
    const modal = document.getElementById("menuModal");
    const fullImage = document.getElementById("fullImage");
    fullImage.src = imgElement.src;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("menuModal").style.display = "none";
}
