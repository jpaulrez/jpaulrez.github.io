function irArriba(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('scroll-arriba')
        // Si el scroll > 350px, entonces muestro el botón 'scroll-arriba'
        if(scroll > pxPantalla) {
            botonArriba.style.opacity=0.8;
            botonArriba.style.transform='scale(1)';
        }
        // de lo contrario, oculto el botón 'scroll-arriba'
        else {
            botonArriba.style.opacity=0;
            botonArriba.style.transform='scale(0)';
        }
    })
}
irArriba(350);