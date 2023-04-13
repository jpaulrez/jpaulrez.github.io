// Seleccionar los elementos a observar
const elementsToObserve = document.querySelectorAll(".element-to-observe");

// Crear el objeto Intersection Observer
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        // Si el elemento es visible en la ventana
        if (entry.isIntersecting) {
            // Hacer algo, por ejemplo, mostrar una animación
            entry.target.classList.add("animate");
        }
    });
});

// Observar cada elemento seleccionado
elementsToObserve.forEach(element => {
    observer.observe(element);
});
