// Selecciona todos los iframes de los videos
const videos = document.querySelectorAll("iframe");

// Configura el observador de intersección
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Si el elemento del video está en el área visible de la pantalla
      if (entry.isIntersecting) {
        // Reproduce el video
        entry.target.src = entry.target.dataset.src;
        // Agrega la clase que aplica la transición
        entry.target.classList.add('video-playing');
      } else {
        // Pausa el video
        entry.target.src = "";
        // Quita la clase para remover la transición
        entry.target.classList.remove('video-playing');
      }
    });
  },
  { threshold: 0.2 }
);

// Observa cada elemento de video
videos.forEach((video) => {
  observer.observe(video);
});
