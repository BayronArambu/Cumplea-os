// script.js
document.addEventListener('DOMContentLoaded', function() {
    const botonInicio = document.getElementById('botonInicio');
    const cumpleForm = document.getElementById('cumpleForm');
    const inicio = document.getElementById('inicio');
    const imagenRegalo = document.getElementById('imagenRegalo');
    const carta = document.getElementById('carta');
    const confetiContainer = document.getElementById('confetiContainer');

    // Cuando se hace clic en el botón inicial
    botonInicio.addEventListener('click', function() {
        inicio.classList.add('oculto');
        cumpleForm.classList.remove('oculto');
    });

    // Cuando se hace clic en el regalo
    imagenRegalo.addEventListener('click', function() {
        carta.classList.toggle('oculto');
        if (!carta.classList.contains('oculto')) {
            lanzarConfeti();
        }
    });

    // Función para lanzar confeti
    function lanzarConfeti() {
        confetiContainer.innerHTML = ''; // Limpiar confeti previo
        for (let i = 0; i < 100; i++) {
            const confeti = document.createElement('div');
            confeti.classList.add('confeti');
            confeti.style.left = Math.random() * 100 + 'vw';
            confeti.style.backgroundColor = getRandomColor();
            confetiContainer.appendChild(confeti);
        }
    }

    // Generar un color aleatorio
    function getRandomColor() {
        const colores = ['#FF69B4', '#FFD700', '#00CED1', '#FF4500', '#32CD32'];
        return colores[Math.floor(Math.random() * colores.length)];
    }
});
