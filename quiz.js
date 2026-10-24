/*==========================================
        IDA CONNECT - QUIZ.JS
==========================================*/

const questions = [

    // HTML

    {
        question: "Que signifie HTML ?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Language",
            "Hyper Transfer Markup Language"
        ],
        correct: 0
    },

    {
        question: "Quelle balise crée un lien ?",
        answers: [
            "<img>",
            "<a>",
            "<link>",
            "<href>"
        ],
        correct: 1
    },

    {
        question: "Quelle balise affiche un paragraphe ?",
        answers: [
            "<h1>",
            "<div>",
            "<p>",
            "<span>"
        ],
        correct: 2
    },

    {
        question: "Quelle balise affiche une image ?",
        answers: [
            "<picture>",
            "<image>",
            "<img>",
            "<src>"
        ],
        correct: 2
    },

    {
        question: "HTML est un ...",
        answers: [
            "Langage de programmation",
            "Langage de balisage",
            "Base de données",
            "Navigateur"
        ],
        correct: 1
    },

    // Algorithmique

    {
        question: "Une variable permet de ...",
        answers: [
            "Stocker une valeur",
            "Créer une page",
            "Afficher une image",
            "Compiler un programme"
        ],
        correct: 0
    },

    {
        question: "Quelle instruction permet de lire une valeur ?",
        answers: [
            "Afficher",
            "Lire",
            "Écrire",
            "Fin"
        ],
        correct: 1
    },

    {
        question: "← représente ...",
        answers: [
            "Une comparaison",
            "Une affectation",
            "Une addition",
            "Une boucle"
        ],
        correct: 1
    },

    {
        question: "Début et Fin servent à ...",
        answers: [
            "Délimiter un algorithme",
            "Déclarer une variable",
            "Créer une boucle",
            "Créer un tableau"
        ],
        correct: 0
    },

    {
        question: "Un algorithme est ...",
        answers: [
            "Une image",
            "Une base de données",
            "Une suite d'instructions",
            "Un compilateur"
        ],
        correct: 2
    },

    // JavaScript

    {
        question: "Quelle instruction déclare une variable ?",
        answers: [
            "echo",
            "let",
            "print",
            "var()"
        ],
        correct: 1
    },

    {
        question: "JavaScript sert principalement à ...",
        answers: [
            "Créer des bases de données",
            "Rendre une page interactive",
            "Créer un système d'exploitation",
            "Dessiner des images"
        ],
        correct: 1
    },

    {
        question: "Quelle structure permet un choix ?",
        answers: [
            "while",
            "for",
            "if",
            "break"
        ],
        correct: 2
    },

    {
        question: "Quel mot-clé déclare une constante ?",
        answers: [
            "let",
            "const",
            "new",
            "int"
        ],
        correct: 1
    },

    {
        question: "Quelle méthode affiche un message dans la console ?",
        answers: [
            "console.log()",
            "alert.log()",
            "print()",
            "echo()"
        ],
        correct: 0
    }

];


/*========================*/

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("score");
const result = document.getElementById("result");
const finalScore = document.getElementById("finalScore");


/*========================*/

function loadQuestion(){

    const q = questions[currentQuestion];

    question.innerHTML = q.question;

    answers.innerHTML = "";

    q.answers.forEach((answer,index)=>{

        const button = document.createElement("button");

        button.innerHTML = answer;

        button.addEventListener("click",()=>checkAnswer(index,button));

        answers.appendChild(button);

    });

}


/*========================*/

function checkAnswer(index,button){

    const correct = questions[currentQuestion].correct;

    const buttons = answers.querySelectorAll("button");

    buttons.forEach(btn=>btn.disabled=true);

    if(index===correct){

        button.classList.add("correct");

        score++;

    }else{

        button.classList.add("wrong");

        buttons[correct].classList.add("correct");

    }

    scoreBox.innerHTML = score + " / " + questions.length;

}


/*========================*/

nextBtn.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion<questions.length){

        loadQuestion();

    }else{

        showResult();

    }

});


/*========================*/

function showResult(){

    document.querySelector(".quiz-container").style.display="none";

    result.style.display="block";

    finalScore.innerHTML =
    "Votre score est de <strong>"+score+
    " / "+questions.length+"</strong>";

    const best = localStorage.getItem("bestScore");

    if(best===null || score>best){

        localStorage.setItem("bestScore",score);

    }

}


/*========================*/

loadQuestion();


console.log("%cIDA CONNECT",
"color:#2563EB;font-size:22px;font-weight:bold;");