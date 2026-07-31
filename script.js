// =============================
// AOS Animation
// =============================

AOS.init({
  duration: 1000,
  once: true
});

// =============================
// Mobile Menu
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =============================
// Close Menu on Link Click
// =============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

// =============================
// Sticky Navbar
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

 // =============================
// Back To Top Button
// =============================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// =============================
// Contact Form
// =============================

const form = document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("✅ Thank you! Your message has been received. We will contact you soon.");

form.reset();

});

}

// =============================
// Current Year
// =============================

const copyright = document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© ${new Date().getFullYear()} AR Web Studio. All Rights Reserved.`;

}

// =============================
// Console Message
// =============================

console.log("🚀 AR Web Studio Website Loaded Successfully");