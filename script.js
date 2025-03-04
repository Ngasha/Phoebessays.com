// Get the modal and the "Get Quote" button
const modal = document.getElementById("quoteModal");
const btn = document.getElementById("getQuote");
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("quoteForm").onsubmit = function(event) {
    event.preventDefault();

    const topic = document.getElementById("topic").value;
    const course = document.getElementById("course").value;
    const pages = parseInt(document.getElementById("pages").value);

    if (pages > 0) {
        const price = pages * 10;
        document.getElementById("result").innerHTML = `The estimated price for your ${course} course on "${topic}" is $${price}.`;
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number of pages.";
    }
}

// here goes the sample works and the dots
const carousel = document.querySelector('.carousel');
const dotsContainer = document.querySelector('.dots-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollStep = 240; // Adjust based on card width
let autoSlideInterval;

// Function to create dots dynamically
function createDots() {
    dotsContainer.innerHTML = ''; // Clear existing dots
    const totalCards = document.querySelectorAll('.carousel-slide').length;

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

// send email on get quote page
// document.querySelector("form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("Your request has been submitted!");
// });