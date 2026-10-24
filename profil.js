/*==========================================
        IDA CONNECT - PROFIL.JS
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
        RÉCUPÉRATION DES ÉLÉMENTS
    ==================================*/

    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");

    const editBtn = document.getElementById("editBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    const progressFill = document.querySelector(".progress-fill");

    /*==================================
        CHARGEMENT UTILISATEUR
    ==================================*/

    let utilisateur = JSON.parse(localStorage.getItem("idaConnectUser"));

    if(utilisateur){

        userEmail.textContent = utilisateur.email;

        if(utilisateur.nom){

            userName.textContent = utilisateur.nom;

        }else{

            userName.textContent = utilisateur.email.split("@")[0];

        }

    }

    /*==================================
        MODIFIER LE NOM
    ==================================*/

    editBtn.addEventListener("click",()=>{

        const nouveauNom = prompt("Entrez votre nouveau nom :");

        if(nouveauNom && nouveauNom.trim() !== ""){

            userName.textContent = nouveauNom;

            utilisateur.nom = nouveauNom;

            localStorage.setItem(

                "idaConnectUser",

                JSON.stringify(utilisateur)

            );

            alert("Profil mis à jour avec succès.");

        }

    });

    /*==================================
        DÉCONNEXION
    ==================================*/

    logoutBtn.addEventListener("click",()=>{

        const confirmation = confirm("Voulez-vous vous déconnecter ?");

        if(confirmation){

            localStorage.removeItem("idaConnectUser");

            window.location.href="login.html";

        }

    });

    /*==================================
        BARRE DE PROGRESSION
    ==================================*/

    if(progressFill){

        progressFill.style.width="0%";

        setTimeout(()=>{

            progressFill.style.width="80%";

        },500);

    }

    /*==================================
        NOTIFICATION
    ==================================*/

    const notification = document.createElement("div");

    notification.innerHTML="Bienvenue sur votre profil 👋";

    notification.style.position="fixed";
    notification.style.top="20px";
    notification.style.right="20px";
    notification.style.background="#2563EB";
    notification.style.color="#fff";
    notification.style.padding="15px 25px";
    notification.style.borderRadius="10px";
    notification.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
    notification.style.zIndex="999";

    document.body.appendChild(notification);

    setTimeout(()=>{

        notification.remove();

    },3000);

    /*==================================
        DATE ET HEURE
    ==================================*/

    const header = document.querySelector("header");

    const date = document.createElement("p");

    date.style.marginTop="10px";

    date.style.color="#64748B";

    header.appendChild(date);

    function updateDate(){

        const maintenant = new Date();

        date.textContent = maintenant.toLocaleString("fr-FR",{

            weekday:"long",

            day:"numeric",

            month:"long",

            year:"numeric",

            hour:"2-digit",

            minute:"2-digit",

            second:"2-digit"

        });

    }

    updateDate();

    setInterval(updateDate,1000);

    /*==================================
        ANIMATION DES CARTES
    ==================================*/

    const cards = document.querySelectorAll(".info-box,.badge-card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".6s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*200);

    });

    /*==================================
        MESSAGE CONSOLE
    ==================================*/

    console.log("%cIDA CONNECT",
    "color:#2563EB;font-size:24px;font-weight:bold;");

    console.log("Profil chargé avec succès.");

});