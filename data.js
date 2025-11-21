// ---------------------------
// LISTE DES INVITÉS
// ---------------------------

const guests = {
    "alice": {
        duo: "Lapin & Carotte",
        costume: "Carotte flamboyante",
        message: "Alice, ce soir tu vas briller comme une carotte radioactive 😎",

        questions: [
            {
                text: "Quel est le thème de la soirée ?",
                options: ["Pizza", "Autour du nombre 2", "Minecraft"],
                correct: "Autour du nombre 2"
            },
            {
                text: "Quel âge je fête ?",
                options: ["20", "21", "22", "40"],
                correct: "22"
            }
        ]
    },

    "kevin": {
        duo: "Batman & Robin",
        costume: "Robin",
        message: "Kevin, tu vas sauver Gotham (ou au moins la soirée).",

        questions: [
            {
                text: "Qui est le meilleur Robin ?",
                options: ["Damian Wayne", "Tim Drake", "Nicolas Sarkozy"],
                correct: "Tim Drake"
            },
            {
                text: "Quel âge je fête ?",
                options: ["18", "20", "22", "69"],
                correct: "22"
            }
        ]
    },

    "antoine": {
        duo: "Mario & Luigi",
        costume: "Luigi",
        message: "Antoine, tu n’auras pas le droit de dire ‘It's a me, Mario’.",

        questions: [
            {
                text: "Quelle couleur porte Luigi ?",
                options: ["Rouge", "Vert", "Jaune"],
                correct: "Vert"
            },
            {
                text: "Quel est le nombre fétiche de la soirée ?",
                options: ["2", "7", "11"],
                correct: "2"
            }
        ]
    }
};

// (Très important) : rendre accessible depuis script.js
window.guests = guests;
