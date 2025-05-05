

document.getElementById("playMusicBtn").addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play();

  const btn = document.getElementById("playMusicBtn");
  btn.style.display = "none";

  const message = document.createElement("p");
  message.textContent = "🎶 Çalıyor...";
  document.querySelector(".music-player").appendChild(message);
});
