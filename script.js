// Obtener todas las imágenes del carrusel
const imagenes = document.querySelectorAll(".carrusel-imagen");
let indiceActual = 0;

// Mostrar solo la imagen actual
function mostrarImagen(indice) {
    imagenes.forEach((img, i) => {
        img.classList.toggle('activa', i === indice);
    });
}

// Cambiar a la siguiente imagen
function cambiarImagen() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
}

// Inicializar carrusel y comenzar intervalo automático
setInterval(cambiarImagen, 3000);
