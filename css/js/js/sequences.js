/*==========================================
        IDA CONNECT - SEQUENCES.JS
==========================================*/

//========================
// RÉCUPÉRATION DES ÉLÉMENTS
//========================

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const buttons = document.querySelectorAll(".openModal");
const search = document.getElementById("search");


//========================
// CONTENU DES RÉSUMÉS
//========================

const sequences = {

html:{

title:"HTML5 - Séquence 1",

content:`

<h3>Définition</h3>

<p>

HTML signifie <b>HyperText Markup Language</b>.

Il permet de créer la structure d'une page Web.

</p>

<h3>Structure d'une page HTML</h3>

<code>

&lt;!DOCTYPE html&gt;<br>

&lt;html&gt;<br>

&nbsp;&nbsp;&lt;head&gt;<br>

&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Ma Page&lt;/title&gt;<br>

&nbsp;&nbsp;&lt;/head&gt;<br>

&nbsp;&nbsp;&lt;body&gt;<br>

&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Bonjour&lt;/h1&gt;<br>

&nbsp;&nbsp;&lt;/body&gt;<br>

&lt;/html&gt;

</code>

<h3>Balises importantes</h3>

<ul>

<li>html</li>

<li>head</li>

<li>body</li>

<li>h1 à h6</li>

<li>p</li>

<li>img</li>

<li>a</li>

<li>table</li>

<li>form</li>

</ul>

<h3>Objectif</h3>

<p>

Créer la structure complète d'une page Web.

</p>

`

},


//====================

algo:{

title:"Algorithmique - Séquence 1",

content:`

<h3>Définition</h3>

<p>

Un algorithme est une suite finie d'instructions permettant de résoudre un problème.

</p>

<h3>Notions importantes</h3>

<ul>

<li>Variables</li>

<li>Constantes</li>

<li>Entrées</li>

<li>Sorties</li>

<li>Traitement</li>

</ul>

<h3>Exemple</h3>

<code>

Variables

A,B,Somme : Entier

Début

Lire A

Lire B

Somme ← A+B

Afficher Somme

Fin

</code>

<h3>Objectif</h3>

<p>

Comprendre la logique avant de programmer.

</p>

`

},

//====================

js:{

title:"JavaScript - Séquence 1",

content:`

<h3>Définition</h3>

<p>

JavaScript est un langage permettant de rendre les pages Web interactives.

</p>

<h3>Variables</h3>

<code>

let nom="Amine";

const age=20;

</code>

<h3>Types</h3>

<ul>

<li>String</li>

<li>Number</li>

<li>Boolean</li>

<li>Array</li>

<li>Object</li>

</ul>

<h3>Conditions</h3>

<code>

if(age>=18){

console.log("Majeur");

}

</code>

<h3>Objectif</h3>

<p>

Ajouter de l'interactivité à une page Web.

</p>

`

}

};


//========================
// OUVERTURE MODAL
//========================

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const module=button.dataset.module;

modalTitle.innerHTML=sequences[module].title;

modalBody.innerHTML=sequences[module].content;

modal.style.display="flex";

});

});


//========================
// FERMER
//========================

closeModal.addEventListener("click",()=>{

modal.style.display="none";

});

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

}

});


//========================
// RECHERCHE
//========================

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const cards=document.querySelectorAll(".module-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});


//========================
// MESSAGE CONSOLE
//========================

console.log("%cIDA CONNECT","color:#2563EB;font-size:22px;font-weight:bold;");

console.log("Module Séquences chargé avec succès.");