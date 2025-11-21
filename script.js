// ---------------------------
// 1. LOGIN — index.html
// ---------------------------

function startQuiz() {
    const name = document.getElementById("nameInput").value.trim().toLowerCase();
    const error = document.getElementById("error");

    if (!guests[name]) {
        error.textContent = "Nom inconnu ! Réessaie ou écris-moi 🫶";
        return;
    }

    localStorage.setItem("guestName", name);
    window.location.href = "quiz.html";
}



// ---------------------------
// 2. QUIZ — quiz.html
// ---------------------------

let currentQuestion = 0;
let selectedAnswer = null;

if (window.location.pathname.includes("quiz.html")) {
    const name = localStorage.getItem("guestName");
    const guest = guests[name];

    document.getElementById("welcome").textContent =
        `Bienvenue ${capitalize(name)} !`;

    loadQuestion();

    function loadQuestion() {
        const q = guest.questions[currentQuestion];

        const box = document.getElementById("questionBox");
        box.innerHTML = `<h3>${q.text}</h3>`;

        q.options.forEach(opt => {
            const div = document.createElement("div");
            div.className = "option";
            div.textContent = opt;
            div.onclick = () => {
                selectedAnswer = opt;
                document.querySelectorAll(".option").forEach(o => o.style.background = "#222");
                div.style.background = "#444";
            };
            box.appendChild(div);
        });
    }
}

function nextQuestion() {
    const name = localStorage.getItem("guestName");
    const guest = guests[name];
    const error = document.getElementById("error");

    const q = guest.questions[currentQuestion];

    if (selectedAnswer !== q.correct) {
        error.textContent = "Mauvaise réponse ! Réessaie 👀";
        return;
    }

    error.textContent = "";
    selectedAnswer = null;
    currentQuestion++;

    if (currentQuestion >= guest.questions.length) {
        window.location.href = "result.html";
    } else {
        loadQuestion();
    }
}



// ---------------------------
// 3. RESULT — result.html
// ---------------------------

if (window.location.pathname.includes("result.html")) {
    const name = localStorage.getItem("guestName");
    const guest = guests[name];

    document.getElementById("duo").textContent = `Ton duo : ${guest.duo}`;
    document.getElementById("costume").textContent = `Ton costume : ${guest.costume}`;
    document.getElementById("message").textContent = guest.message;
}



// ---------------------------
// UTILS
// ---------------------------

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
