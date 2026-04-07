const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const tracks = document.querySelectorAll('.track-item');

let currentIndex = 0;

// 再生/一時停止
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playBtn.textContent = 'Play';
  }
});

// 曲リストクリックで切替
tracks.forEach((track, index) => {
  track.addEventListener('click', () => {
    const src = track.dataset.src;
    audio.src = src;
    audio.play();
    playBtn.textContent = 'Pause';
    currentIndex = index;

    // メイン表示更新
    document.querySelector('.cover').src = track.querySelector('.track-cover').src;
    document.querySelector('.title').textContent = track.querySelector('.track-title').textContent;
    document.querySelector('.artist').textContent = track.querySelector('.track-artist').textContent;
  });
});

// 前の曲
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  tracks[currentIndex].click();
});

// 次の曲
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  tracks[currentIndex].click();
});
