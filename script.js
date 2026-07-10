const beginButton = document.getElementById("beginButton");
const intro = document.getElementById("intro");
const letterSection = document.getElementById("letterSection");
const typedLetter = document.getElementById("typedLetter");
const moonButton = document.getElementById("moonButton");
const ending = document.getElementById("ending");
const music = document.getElementById("bgMusic");

beginButton.addEventListener("click", () => {

    intro.style.display = "none";
    letterSection.style.display = "flex";

   if (music) {
    music.volume = 0.5; // 50% volume
    music.play()
        .then(() => console.log("Music started!"))
        .catch(err => {
            console.error("Music failed to play:", err);
            alert("Music failed to play: " + err.message);
        });
}
    }

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

    letterSection.style.display = "none";
    ending.style.display = "flex";

});
