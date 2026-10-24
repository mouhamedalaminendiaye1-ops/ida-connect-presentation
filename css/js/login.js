/*=========================================
        IDA CONNECT - LOGIN.JS
=========================================*/

//==============================
// RÉCUPÉRATION DES ÉLÉMENTS
//==============================

const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

//==============================
// AFFICHER / MASQUER MOT DE PASSE
//==============================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});

//==============================
// VALIDATION EMAIL
//==============================

function emailValide(emailValue) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(emailValue);

}

//==============================
// CONNEXION
//==============================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const userEmail = email.value.trim();
    const userPassword = password.value.trim();

    // Champs obligatoires

    if (userEmail === "" || userPassword === "") {

        alert("Veuillez remplir tous les champs.");

        return;

    }

    // Vérification email

    if (!emailValide(userEmail)) {

        alert("Adresse e-mail invalide.");

        email.focus();

        return;

    }

    // Longueur mot de passe

    if (userPassword.length < 6) {

        alert("Le mot de passe doit contenir au moins 6 caractères.");

        password.focus();

        return;

    }

    //==============================
    // SAUVEGARDE UTILISATEUR
    //==============================

    const utilisateur = {

        email: userEmail,

        connexion: new Date().toLocaleString()

    };

    localStorage.setItem(
        "idaConnectUser",
        JSON.stringify(utilisateur)
    );

    //==============================
    // MESSAGE
    //==============================

    alert("Connexion réussie !");

    //==============================
    // REDIRECTION
    //==============================

    window.location.href = "./js/dashboard.html";

});

//==============================
// SI L'UTILISATEUR EST DÉJÀ CONNECTÉ
//==============================

window.addEventListener("load", () => {

    const utilisateur = localStorage.getItem("idaConnectUser");

    if (utilisateur) {

        console.log("Utilisateur déjà connecté.");

    }

});

//==============================
// ENTRÉE AVEC LA TOUCHE ENTRÉE
//==============================

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        form.requestSubmit();

    }

});

//==============================
// MESSAGE DANS LA CONSOLE
//==============================

console.log("%cIDA Connect",
    "color:#0F62FE;font-size:22px;font-weight:bold;");

console.log("Système de connexion chargé avec succès.");