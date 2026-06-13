// 1. Capturamos los elementos del HTML
const formulario = document.getElementById('formulario');
const cajaTexto = document.getElementById('cajaTexto');
const listaComentarios = document.getElementById('listaComentarios');

// 2. Escuchamos el evento cuando se envía el formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos que la página se recargue

    const textoComentario = cajaTexto.value.trim();
    if (textoComentario === "") return;

    // --- OBTENER FECHA Y HORA ---
    const ahora = new Date();
    // Formato amigable: "13/6/2026, 13:32:15"
    const fechaHoraTexto = ahora.toLocaleString(); 

    // --- CREAR ELEMENTOS EN EL DOM ---
    // Creamos un contenedor tipo "div" para envolver todo el comentario individual
    const bloqueComentario = document.createElement('div');
    bloqueComentario.classList.add('comentario-card');

    // Creamos el párrafo para el texto del comentario
    const parrafoTexto = document.createElement('p');
    parrafoTexto.textContent = textoComentario;
    parrafoTexto.classList.add('texto-contenido');

    // Creamos la etiqueta pequeña para la fecha y hora
    const etiquetaFecha = document.createElement('span');
    etiquetaFecha.textContent = `Publicado: ${fechaHoraTexto}`;
    etiquetaFecha.classList.add('texto-fecha');

    // REQUISITO OPCIONAL: Botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add('btn-eliminar');

    // Programamos la acción de borrar para este botón específico
    botonEliminar.addEventListener('click', function() {
        bloqueComentario.remove(); // Borra todo el bloque del comentario de la página
    });

    // --- ARMAR e INYECTAR EN LA PÁGINA ---
    // Metemos el texto, la fecha y el botón dentro del bloque contenedor
    bloqueComentario.appendChild(parrafoTexto);
    bloqueComentario.appendChild(etiquetaFecha);
    bloqueComentario.appendChild(botonEliminar);

    // Lo agregamos al contenedor principal de la lista
    // Usamos 'appendChild' para que aparezcan abajo del formulario uno tras otro
    listaComentarios.appendChild(bloqueComentario);

    // Limpiamos el input para el siguiente comentario
    cajaTexto.value = "";
});