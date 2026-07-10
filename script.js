const beginButton = document.getElementById("beginButton");
const intro = document.getElementById("intro");
const letterSection = document.getElementById("letterSection");
const typedLetter = document.getElementById("typedLetter");
const moonButton = document.getElementById("moonButton");
const ending = document.getElementById("ending");
const music = document.getElementById("bgMusic");

beginButton.addEventListener("click", () => {

    intro.classList.add("hidden");

    letterSection.classList.remove("hidden");
    letterSection.style.display = "flex";

    if (music) {
        music.play().catch(() => {});
    }

    typedLetter.innerHTML = "";
    typeLetter();
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

moonButton.addEventListener("click", () => {

    letterSection.classList.add("hidden");

    ending.classList.remove("hidden");
    ending.style.display = "flex";

});
