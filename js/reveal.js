document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const contentWrapper = document.getElementById('content-wrapper');

    function updateFooterHeight() {
        if (footer && contentWrapper) {
            const footerHeight = footer.offsetHeight;
            contentWrapper.style.marginBottom = `${footerHeight}px`;
        }
    }

    // Initial calculation
    updateFooterHeight();

    // Recalculate on resize
    window.addEventListener('resize', updateFooterHeight);
});
