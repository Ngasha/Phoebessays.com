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
