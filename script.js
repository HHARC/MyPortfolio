// Carousel


// let currentImage = 1;
// let totalImages = 3; 

// function showImage(index) {
    
//     for (let i = 1; i <= totalImages; i++) {
//         document.querySelector('.img-' + i).classList.add('d-none');
//     }


    
//     document.querySelector('.img-' + index).classList.remove('d-none');
// }

// document.getElementById('next').addEventListener('click', function () {
//     currentImage = (currentImage % totalImages) + 1;
//     showImage(currentImage);
// });

// document.getElementById('previous').addEventListener('click', function () {
//     currentImage = (currentImage - 2 + totalImages) % totalImages + 1;
//     showImage(currentImage);
// });




function showSlides(carouselId) {
  let slideIndex = 0;
  const slides = document.querySelectorAll(`#${carouselId} .mySlides`);
  const dots = document.querySelectorAll(`#${carouselId} .dots`);

  function displaySlide() {
    if (!slides.length) {
        console.error("🚨 No slides found!");
        return;
    }

    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    slides.forEach((slide) => {
        if (slide) slide.style.display = "none"; // ✅ Fix: Check if slide exists
    });

    if (slides[slideIndex]) {
        slides[slideIndex].style.display = "block"; // ✅ Fix: Prevent undefined errors
    }

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    if (dots[slideIndex]) {
        dots[slideIndex].classList.add("active");
    }
}


  function nextSlide() {
    slideIndex++;
    displaySlide();
    resetTimer();
  }

  function prevSlide() {
    slideIndex--;
    displaySlide();
    resetTimer();
  }

  function currentSlide(n) {
    slideIndex = n - 1;
    displaySlide();
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timer = _timer;
    timerInterval = setInterval(nextSlide, 5000); // 1 sec
  }

  let timer = 7; // sec
  const _timer = timer;
  let timerInterval = setInterval(nextSlide, 5000); // 1 sec

  displaySlide(); // Initial display
}

// Initialize carousels
showSlides('carousel-1');
showSlides('carousel-2');
showSlides('carousel-3');
// Add more showSlides calls for each carousel you have


function submitForm() {
  // You can add your form validation here if needed

  // Simulate form submission
  alert('Form submitted successfully!');
}


document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JavaScript Loaded");

  const darkModeToggle = document.getElementById("darkModeToggle");
  const toggleIcon = document.getElementById("toggleIcon");
  const body = document.body;

  if (!darkModeToggle) {
      console.error("🚨 Dark Mode Button NOT Found!");
      return;
  }

  // Check localStorage for Dark Mode setting
  if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      toggleIcon.textContent = "🌙"; // Moon emoji for Dark Mode
      console.log("🌙 Dark Mode is ON");
  } else {
      toggleIcon.textContent = "☀️"; // Sun emoji for Light Mode
      console.log("☀️ Light Mode is ON");
  }

  // Toggle Dark Mode on button click
  darkModeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
          toggleIcon.textContent = "🌙"; // Change to Moon
          console.log("🌙 Dark Mode Activated");
      } else {
          localStorage.setItem("darkMode", "disabled");
          toggleIcon.textContent = "☀️"; // Change to Sun
          console.log("☀️ Light Mode Activated");
      }
  });
});



