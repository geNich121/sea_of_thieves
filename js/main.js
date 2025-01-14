// Header scrolling effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
  
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    scrollToTopButton.classList.toggle("visible", window.scrollY > window.innerHeight);
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
});



const colorItems = document.querySelectorAll('.color-item');
const selectedColorImg = document.getElementById('selected-color-img');

colorItems.forEach(item => {
    item.addEventListener('click', () => {
        const newImgSrc = item.getAttribute('data-img');
        selectedColorImg.src = newImgSrc;
    });
});

// Slider functionality
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".slider-button.prev");
  const nextButton = document.querySelector(".slider-button.next");
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  };

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000);
  showSlide(currentSlide);
});

