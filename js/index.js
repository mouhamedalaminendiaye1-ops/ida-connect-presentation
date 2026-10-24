/*=========================================
    IDA CONNECT - INDEX.JS
=========================================*/

//==============================
// MENU RESPONSIVE
//==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

// nav bar scroll 

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    }

});


// ANIMATION APPARITION
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card, .about, .stats, .cta")
.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


//COMPTEURS ANIMÉS
const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter => {

    const targetText = counter.innerText;

    const target = parseInt(targetText);

    if (isNaN(target)) return;

    let count = 0;

    const speed = target / 60;

    const updateCounter = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = targetText;

        }

    }

    updateCounter();

});


// BOUTON RETOUR EN HAUTruc
const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.opacity = "1";
        topButton.style.visibility = "visible";

    } else {

        topButton.style.opacity = "0";
        topButton.style.visibility = "hidden";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

//==============================
// EFFET SUR LES CARTES
//==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

//==============================
// MESSAGE DE BIENVENUE
//==============================

window.addEventListener("load", () => {

    console.log("%cBienvenue sur IDA Connect 🚀",
        "color:#0F62FE;font-size:20px;font-weight:bold;");

});