// Her şey DOM yüklendikten sonra çalışsın
window.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closePopup");

  // "Hayır" butonu kaçsın 😅
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });


  yesBtn.addEventListener("click", () => {
  const video = document.getElementById("popupVideo");
  popup.style.display = "flex";

  video.currentTime = 0; // Baştan başlat
  video.play();          // Oynat
  launchHearts();        // Kalpler uçsun!
});


 closeBtn.addEventListener("click", () => {
  popup.style.display = "none";

  const video = document.getElementById("popupVideo");
  video.pause();
  video.currentTime = 0;
});


  // Kalp patlaması efekti
  function launchHearts() {
    const container = document.getElementById("hearts-container");

    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${100 + Math.random() * 50}px`;
      heart.textContent = "💖";
      container.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
  }
});
