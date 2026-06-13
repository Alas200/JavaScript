// 1. Buscamos los elementos en la página
const formulario = document.getElementById('formulario');
const cajaTexto = document.getElementById('cajaTexto');
const listaComentarios = document.getElementById('listaComentarios');

// 2. Escuchamos cuando se envía el formulario
formulario.addEventListener('submit', function(event) {
    
    // Evitamos que la página se recargue
    event.preventDefault();

    // Guardamos el texto del input
    const textoComentario = cajaTexto.value;

    // Si el usuario no escribió nada, paramos aquí
    if (textoComentario === "") {
        alert("¡Escribe algo primero!");
        return; 
    }

    // 3. Creamos un nuevo párrafo para el comentario
    const nuevoComentario = document.createElement('p');
    nuevoComentario.textContent = textoComentario;

    // 4. Lo metemos dentro del div de la lista
    listaComentarios.appendChild(nuevoComentario);

    // 5. Vaciamos el input para que quede limpio
    cajaTexto.value = "";
});