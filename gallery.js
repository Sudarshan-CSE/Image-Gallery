// Modal functionality
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Slideshow functionality
let slideIndex = 1;
let slideInterval;

// Start automatic slideshow
function startSlideshow() {
    showSlides(slideIndex);
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000); // Change slide every 3 seconds
}

function currentSlide(n) {
    clearInterval(slideInterval); // Reset interval when manually changing slides
    showSlides(slideIndex = n);
    startSlideshow(); // Restart automatic slideshow
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Start slideshow when page loads
document.addEventListener('DOMContentLoaded', startSlideshow); 