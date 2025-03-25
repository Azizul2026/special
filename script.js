

function startCelebration() {
    document.getElementById("birthdaySong").play();
    startConfetti();
}

// Confetti Animation
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];
const colors = ["#ff4081", "#ffeb3b", "#3f51b5", "#4caf50"];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 10 + 5,
            speed: Math.random() * 5 + 2
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.y += p.speed;
        if (p.y > canvas.height) {
            p.y = -10;
        }
    });
    requestAnimationFrame(drawConfetti);
}

function startConfetti() {
    createConfetti();
    drawConfetti();
}
