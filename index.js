const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts");

/* Play music once */
document.body.addEventListener("click", () => {
    bgMusic.play();
}, { once: true });

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
    createConfetti();
    setTimeout(() => {
        window.location.href = "love.html";
    }, 1500);
});

/* NO BUTTON RUNS */
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

/* Floating Hearts */
function createHearts() {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHearts, 500);

/* Confetti */
function createConfetti() {
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");

        confetti.style.position = "absolute";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.backgroundColor =
            `hsl(${Math.random() * 360}, 100%, 50%)`;

        confetti.style.top = "50%";
        confetti.style.left = "50%";
        confetti.style.borderRadius = "50%";

        document.body.appendChild(confetti);

        const x = (Math.random() - 0.5) * 1000;
        const y = (Math.random() - 0.5) * 1000;

        confetti.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
            duration: 1500,
            easing: "ease-out"
        });

        setTimeout(() => confetti.remove(), 1500);
    }
}
