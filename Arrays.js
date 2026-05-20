// 1. Declarar el arreglo de frutas
const frutas = ['manzana', 'platano', 'manzana', 'pera', 'platano', 'naranja', 'manzana'];

// 2. Crear el objeto para almacenar el conteo
const conteoFrutas = {};

// 3. Recorrer el arreglo con el ciclo FOR NORMAL
// Iniciamos en 0, avanzamos de uno en uno (i++), y nos detenemos antes de pasarnos del largo del arreglo
for (let i = 0; i < frutas.length; i++) {
    // Usamos el índice [i] para sacar la fruta actual del arreglo
    const frutaActual = frutas[i]; 
    
    // Revisamos si esa fruta ya es una propiedad dentro de nuestro objeto
    if (conteoFrutas[frutaActual]) {
        conteoFrutas[frutaActual]++; // Si ya estaba, le sumamos 1 al contador
    } else {
        conteoFrutas[frutaActual] = 1; // Si es la primera vez que sale, la anotamos con un 1
    }
}

// 4. Imprimir en la consola el resultado
console.log("Resultado del conteo:");
console.log(conteoFrutas);