// Navbar background changes on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.style.background = "#111";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
    }
});

// Get Started Button
const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("click", function () {
        alert("Welcome! Thanks for visiting my landing page.");
    });
}

// Navigation link highlight
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});