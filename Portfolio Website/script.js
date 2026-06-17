```javascript
// ==========================
// Mobile Menu Toggle
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav ul");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
            nav.style.flexDirection = "column";
            nav.style.position = "absolute";
            nav.style.top = "80px";
            nav.style.right = "20px";
            nav.style.background = "#1e293b";
            nav.style.padding = "20px";
            nav.style.borderRadius = "10px";
            nav.style.gap = "15px";
        }
    });
}

// ==========================
// Close Menu on Link Click
// ==========================

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            nav.style.display = "none";
        }
    });
});

// ==========================
// Active Navigation on Scroll
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});

// ==========================
// Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(
    ".hero, .about, .skills, .projects, .contact"
);

function revealOnScroll() {

    revealElements.forEach(item => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
            item.style.transition = "0.8s ease";
        }

    });

}

revealElements.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
```
