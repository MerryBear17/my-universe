const beginButton = document.getElementById("beginButton");
const intro = document.getElementById("intro");
const letterSection = document.getElementById("letterSection");
const typedLetter = document.getElementById("typedLetter");
const moonButton = document.getElementById("moonButton");
const ending = document.getElementById("ending");
const counter = document.getElementById("counter");
const music = document.getElementById("bgMusic");

beginButton.addEventListener("click", () => {

    intro.style.display = "none";
    letterSection.style.display = "flex";

    if (music) {
        music.play().catch(() => {});
    }

    typeLetter();
    startHearts();
    updateCounter();
});

function typeLetter() {

    let i = 0;

    function typing() {

        if (i < letter.length) {
            typedLetter.innerHTML += letter.charAt(i);
            i++;
            setTimeout(typing, 35);
        }

    }

    typing();
}

function updateCounter() {

    const startDate = new Date("2026-03-11");

    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const months = Math.floor(days / 30);

    const hours = Math.floor(diff / (1000 * 60 * 60));

    counter.innerHTML = `
        ❤️ Together for approximately
        <br><br>
        ${months} beautiful months
        <br>
        ${days} days
        <br>
        ${hours.toLocaleString()} hours
    `;
}

function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = ["❤️","💖","💕","💙","✨"][Math.floor(Math.random() * 5)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 500);
}

moonButton.addEventListener("click", () => {

    letterSection.style.display = "none";
    ending.style.display = "flex";

    launchStars();
});

function launchStars() {

    for (let i = 0; i < 120; i++) {

        setTimeout(() => {

            const star = document.createElement("div");

            star.innerHTML = "⭐";

            star.style.position = "fixed";
            star.style.left = Math.random() * 100 + "vw";
            star.style.top = Math.random() * 100 + "vh";
            star.style.fontSize =
                (10 + Math.random() * 30) + "px";
            star.style.pointerEvents = "none";
            star.style.zIndex = "999";

            document.body.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 3000);

        }, i * 40);
    }
}
