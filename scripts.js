const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatWindow = document.getElementById('chat-window');
const fileInput = document.getElementById('file-input');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('show');
        hamburger.classList.remove('open');
    }
});

sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        addChatBubble('client', message);
        chatInput.value = '';
        setTimeout(() => {
            addChatBubble('admin', 'Thank you for your message. We will get back to you soon!');
        }, 1000);
    }
});

fileInput.addEventListener('change', (e) => {
    const fileName = e.target.files[0]?.name || '';
    if (fileName) {
        addChatBubble('client', `File attached: ${fileName}`);
    }
});

function addChatBubble(user, message) {
    const bubble = document.createElement('div');
    bubble.classList.add('chat-bubble', `${user}-bubble`);
    bubble.textContent = message;
    chatWindow.appendChild(bubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

//carousel for sample works
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselTrack = document.getElementById('carouselTrack');
    const slides = Array.from(carouselTrack.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentSlideIndex = 0;

    // Function to update the position of the carousel track
    function updateCarouselPosition() {
        const offset = -currentSlideIndex * slideWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;
    }

    // Click event for the previous button
    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateCarouselPosition();
        }
    });

    // Click event for the next button
    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            updateCarouselPosition();
        }
    });
});

