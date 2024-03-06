const carouselItems = document.querySelectorAll('.projects__container__item');
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach(item => {
    item.style.opacity = '0';
  });
  

  // Show the slide at the specified index
  carouselItems[index].style.opacity = '1';
  carouselItems[index].style.transition = 'all 2s'
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);
