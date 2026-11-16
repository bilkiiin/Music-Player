document.addEventListener('DOMContentLoaded', () => {
    const randomBtn = document.getElementById('randomBtn');
    const choiceBtn = document.getElementById('choiceBtn');
    const musicList = document.getElementById('musicList');
    const trackButtons = document.querySelectorAll('.track-btn');

    const tracks = [
        'audio/Business.mp3',
        'audio/CleaninOutMyCloset.mp3',
        'audio/MyDadsGoneCrazy.mp3',
        'audio/SingForTheMoment.mp3',
        'audio/Superman.mp3',
        'audio/TillIT.mp3',
        'audio/WhiteAmerica.mp3',
        'audio/WithoutMe.mp3'
    ];

    let currentAudio = null;

    function playTrack(trackSrc) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(trackSrc);
        currentAudio.play().catch(err => console.error('Ошибка:', err));
    }

    function playRandomTrack() {
        const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
        playTrack(randomTrack);
    }

    if (randomBtn) {
        randomBtn.addEventListener('click', playRandomTrack);
    }

    if (choiceBtn && musicList) {
        choiceBtn.addEventListener('click', () => {
            const isVisible = musicList.style.display === 'block';
            musicList.style.display = isVisible ? 'none' : 'block';
        });
    }

    trackButtons.forEach(button => {
        button.addEventListener('click', () => {
            playTrack(button.dataset.track);
        });
    });
});