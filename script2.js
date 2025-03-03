// const carousel = document.querySelector('.carousel');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let scrollAmount = 0;
// const scrollStep = 220; // Adjust based on card width

// nextBtn.addEventListener('click', () => {
//     carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
// });

// prevBtn.addEventListener('click', () => {
//     carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
// });

/*  the dots revamp*/
// const carousel = document.querySelector('.carousel');
// const dots = document.querySelectorAll('.dot');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let scrollStep = 240; // Adjust based on card width
// let autoSlideInterval;

// // Update active dot
// function updateDots() {
//     let activeIndex = Math.round(carousel.scrollLeft / scrollStep);
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[activeIndex].classList.add('active');
// }

// // Function to slide to the next card
// function slideNext() {
//     if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
//         carousel.scrollTo({ left: 0, behavior: 'smooth' });
//     } else {
//         carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
//     }
//     updateDots();
// }

// // Function to slide to the previous card
// function slidePrev() {
//     carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
//     updateDots();
// }

// // Auto-slide every 3 seconds
// function startAutoSlide() {
//     autoSlideInterval = setInterval(slideNext, 3000);
// }

// // Stop auto-slide when user interacts
// function stopAutoSlide() {
//     clearInterval(autoSlideInterval);
//     setTimeout(startAutoSlide, 5000);
// }

// // Event Listeners
// nextBtn.addEventListener('click', () => {
//     slideNext();
//     stopAutoSlide();
// });

// prevBtn.addEventListener('click', () => {
//     slidePrev();
//     stopAutoSlide();
// });

// // Update dots on scroll
// carousel.addEventListener('scroll', () => {
//     updateDots();
// });

// // Click on dots to navigate
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         carousel.scrollTo({ left: index * scrollStep, behavior: 'smooth' });
//         updateDots();
//         stopAutoSlide();
//     });
// });

// // Start auto-slide
// startAutoSlide();

const carousel = document.querySelector('.carousel');
const dotsContainer = document.querySelector('.dots-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollStep = 240; // Adjust based on card width
let autoSlideInterval;

// Function to create dots dynamically
function createDots() {
    dotsContainer.innerHTML = ''; // Clear existing dots
    const totalCards = document.querySelectorAll('.card').length;

    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active'); // First dot active by default
        dot.dataset.index = i;

        // Click event to move to corresponding card
        dot.addEventListener('click', () => {
            carousel.scrollTo({ left: i * scrollStep, behavior: 'smooth' });
            updateDots(i);
            stopAutoSlide();
        });

        dotsContainer.appendChild(dot);
    }
}

// Function to update active dot
function updateDots(activeIndex = Math.round(carousel.scrollLeft / scrollStep)) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[activeIndex]) dots[activeIndex].classList.add('active');
}

// Function to slide next
function slideNext() {
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
    updateDots();
}

// Function to slide previous
function slidePrev() {
    carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    updateDots();
}

// Auto-slide every 3 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(slideNext, 3000);
}

// Stop auto-slide when user interacts
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    setTimeout(startAutoSlide, 5000);
}

// Event listeners
nextBtn.addEventListener('click', () => {
    slideNext();
    stopAutoSlide();
});

prevBtn.addEventListener('click', () => {
    slidePrev();
    stopAutoSlide();
});

carousel.addEventListener('scroll', () => {
    updateDots();
});

// Initialize dots when page loads
createDots();
startAutoSlide();