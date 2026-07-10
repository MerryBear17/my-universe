const beginButton = document.getElementById("beginButton");
const intro = document.getElementById("intro");
const letterSection = document.getElementById("letterSection");
const typedLetter = document.getElementById("typedLetter");
const moonButton = document.getElementById("moonButton");
const ending = document.getElementById("ending");
const music = document.getElementById("bgMusic");

beginButton.addEventListener("click", () => {

    // Hide intro
    intro.classList.add("hidden");

    // Show letter
    letterSection.classList.remove("hidden");

    // Play music
    if (music) {
        music.volume = 0.5;
        music.play().catch(error => {
            console.log(error);
        });
    }

    // Start typing
    typeLetter();

});

function typeLetter() {

    typedLetter.innerHTML = "";

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

});
