const discordBtn = document.getElementById('discord-btn');
const toast = document.getElementById('toast');

discordBtn.addEventListener('click', () => {
    const discordTag = discordBtn.getAttribute('data-tag');
    
    navigator.clipboard.writeText(discordTag).then(() => {
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Не удалось скопировать: ', err);
    });
});
const audio = document.getElementById('bg-audio');
const playerBtn = document.getElementById('player-btn');
const timeline = document.getElementById('timeline');

playerBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playerBtn.textContent = '❚❚ PAUSE';
    } else {
        audio.pause();
        playerBtn.textContent = '▶ PLAY';
    }
});

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        timeline.value = progress;
    }
});

timeline.addEventListener('input', () => {
    const timeToSet = (timeline.value / 100) * audio.duration;
    audio.currentTime = timeToSet;
});
const volumeControl = document.getElementById('volume-control');

audio.volume = parseFloat(volumeControl.value) / 100;

volumeControl.addEventListener('input', () => {
    volumeControl.addEventListener('input', () => {
    audio.volume = parseFloat(volumeControl.value) / 100;
});
});
