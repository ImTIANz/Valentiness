document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Great! Looking forward to a wonderful Valentine\'s Day together!');
    // Optionally, you can redirect to a special page or perform other actions.
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('Oh no! I hope you change your mind. Let me know if there\'s anything I can do to make it special.');
    // Optionally, you can redirect to a page with a cute message or provide a form for feedback.
});

// Toggle background music
const backgroundMusic = document.getElementById('backgroundMusic');
const toggleMusicBtn = document.getElementById('toggleMusicBtn');

toggleMusicBtn.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusicBtn.innerText = 'Pause Music';
    } else {
        backgroundMusic.pause();
        toggleMusicBtn.innerText = 'Play Music';
    }
});


// Countdown timer to Valentine's Day
const countdownElement = document.getElementById('countdown');
const valentinesDay = new Date('2024-02-14T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = valentinesDay - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        countdownElement.innerHTML = 'Valentine\'s Day has arrived!';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();