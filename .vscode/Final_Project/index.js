const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
}); 


const form = document.getElementById("contact-form");
const response = document.getElementById("form-response");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    response.textContent =
        "Thank you! Your message has been received.";

    form.reset();
});