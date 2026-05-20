// 1. Declaramos el array vacío para ir guardando los libros
const librosLeidos = [];

// 2. Definimos la función para agregar un libro al array
function agregarLibro(titulo) {
    librosLeidos.push(titulo); // .push() añade el elemento al final del array
    console.log(`¡Libro agregado con éxito: "${titulo}"!`);
}

// 3. Definimos la función para mostrar todos los libros guardados
function mostrarLibrosLeidos() {
    // Primero revisamos si el array está vacío
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro. ¡Es buen momento para empezar!");
        return; // Salimos de la función si no hay nada que mostrar
    }

    console.log("\n --- Lista de Libros Leídos ---");
    
    // Usamos el ciclo FOR NORMAL (clásico) para recorrer e imprimir cada libro
    for (let i = 0; i < librosLeidos.length; i++) {
        // i + 1 es solo para que la lista empiece en 1 frente al usuario y no en 0
        console.log(`${i + 1}. ${librosLeidos[i]}`);
    }
}

// === PRUEBA DEL CÓDIGO ===
// Intentamos mostrar la lista cuando está vacía
mostrarLibrosLeidos();

console.log("\n--- Añadiendo libros ---");
// Agregamos un par de libros
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
agregarLibro("Hábitos Atómicos");

// Mostramos la lista con los libros ya agregados
mostrarLibrosLeidos();