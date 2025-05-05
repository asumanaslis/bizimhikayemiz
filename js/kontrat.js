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

  // "Evet" basıldığında popup aç ve kalpler uçsun
  yesBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    launchHearts();
  });

  // Popup'ı kapat
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
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
