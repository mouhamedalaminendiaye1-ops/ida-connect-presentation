/*==========================================
        IDA CONNECT - DASHBOARD.JS
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
        UTILISATEUR CONNECTÉ
    ==================================*/

    const user = JSON.parse(localStorage.getItem("idaConnectUser"));

    const welcomeTitle = document.querySelector(".welcome h2");

    if (user && user.email) {

        const username = user.email.split("@")[0];

        welcomeTitle.textContent = `Bonjour ${username} 👋`;

    }

    /*==================================
        DATE ET HEURE
    ==================================*/

    const header = document.querySelector("header");

    const clock = document.createElement("div");

    clock.className = "clock";

    header.appendChild(clock);

    function updateClock() {

        const now = new Date();

        clock.innerHTML = now.toLocaleString("fr-FR", {

            weekday: "long",

            day: "numeric",

            month: "long",

            year: "numeric",

            hour: "2-digit",

            minute: "2-digit",

            second: "2-digit"

        });

    }

    updateClock();

    setInterval(updateClock,1000);

    /*==================================
        NOTIFICATION
    ==================================*/

    const notification = document.createElement("div");

    notification.className = "notification";

    notification.innerHTML = "🎉 Bienvenue sur IDA Connect";

    document.body.appendChild(notification);

    notification.style.display = "block";

    setTimeout(()=>{

        notification.style.display="none";

    },4000);

    /*==================================
        MODE SOMBRE
    ==================================*/

    const themeButton = document.createElement("button");

    themeButton.className = "theme-btn";

    themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';

    document.body.appendChild(themeButton);

    // Charger le thème sauvegardé

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");

        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    themeButton.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme","dark");

            themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';

        }else{

            localStorage.setItem("theme","light");

            themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });

    /*==================================
        ANIMATION DES CARTES
    ==================================*/

    const cards = document.querySelectorAll(".card,.module");

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".6s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*180);

    });

    /*==================================
        BARRE DE PROGRESSION
    ==================================*/

    const progressFill = document.querySelector(".progress-fill");

    if(progressFill){

        progressFill.style.width="0";

        setTimeout(()=>{

            progressFill.style.width="80%";

        },600);

    }

    /*==================================
        DÉCONNEXION
    ==================================*/

    const logout = document.querySelector('a[href="index.html"]');

    if(logout){

        logout.addEventListener("click",(e)=>{

            e.preventDefault();

            const confirmation = confirm("Voulez-vous vraiment vous déconnecter ?");

            if(confirmation){

                localStorage.removeItem("idaConnectUser");

                window.location.href="index.html";

            }

        });

    }

    /*==================================
        HOVER DES MODULES
    ==================================*/

    const modules = document.querySelectorAll(".module");

    modules.forEach(module=>{

        module.addEventListener("mouseenter",()=>{

            module.style.transform="translateY(-10px) scale(1.03)";

        });

        module.addEventListener("mouseleave",()=>{

            module.style.transform="translateY(0) scale(1)";

        });

    });

    /*==================================
        MESSAGE CONSOLE
    ==================================*/

    console.log("%cIDA CONNECT","color:#2563EB;font-size:24px;font-weight:bold;");

    console.log("Dashboard chargé avec succès.");

});