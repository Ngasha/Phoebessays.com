document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. MOBILE NAVIGATION
       ========================================= */
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('show');
            // Toggle hamburger animation state if needed
            hamburger.querySelectorAll('span').forEach((span, index) => {
                // simple animation logic if desired, or relying on CSS transitions
            });
        });

        // Close mobile nav when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('show');
            }
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('show');
            });
        });
    }

    /* =========================================
       2. QUOTE CALCULATOR MODAL
       ========================================= */
    const modal = document.getElementById("quoteModal");
    const span = document.getElementsByClassName("close")[0];

    // Open modal via specific triggers (if any exist)
    // Note: The "GET QUOTE" buttons in nav often link to WhatsApp or open this modal.
    // If you want any button to open the modal, add `id="openModalBtn"` or class logic here.

    // For specific ID "getQuote" (Mobile Nav link might use this)
    const mobileGetQuoteBtn = document.getElementById("getQuote");
    if (mobileGetQuoteBtn && modal) {
        mobileGetQuoteBtn.onclick = function (e) {
            e.preventDefault();
            modal.style.display = "block";
        }
    }

    // Close Modal
    if (span && modal) {
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Handle Quote Calculation Form
    const quoteForm = document.getElementById("quoteForm");
    if (quoteForm) {
        quoteForm.onsubmit = function (event) {
            event.preventDefault();

            const topic = document.getElementById("topic").value;
            const course = document.getElementById("course").value;
            const pages = parseInt(document.getElementById("pages").value);
            const resultDiv = document.getElementById("result");

            if (pages > 0) {
                const price = pages * 10;
                resultDiv.innerHTML = `The estimated price for your ${course} course on "${topic}" is $${price}.`;
                resultDiv.style.color = "#ff6b00";
            } else {
                resultDiv.innerHTML = "Please enter a valid number of pages.";
                resultDiv.style.color = "red";
            }
        }
    }

});

    /* =========================================
       3. FAQ ACCORDION LOGIC
       ========================================= */
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Toggle current
                item.classList.toggle('active');
                
                // Optional: Close others
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });
    }
