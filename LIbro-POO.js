// Creamos un único objeto llamado "libro"
const libro = {
    // Propiedades básicas
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    
    // Propiedad opcional: lista de capítulos (inicia vacía)
    capitulos: [],

    // Método para imprimir la información básica del libro
    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: [${this.estado}].`);
    },

    // Método opcional: agregar un capítulo
    agregarCapitulo: function(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
        console.log(` Capítulo "${nombreCapitulo}" agregado con éxito.`);
    },

    // Método opcional: eliminar el último capítulo
    eliminarCapitulo: function() {
        if (this.capitulos.length === 0) {
            console.log(" No hay capítulos en la lista para eliminar.");
            return;
        }
        const capituloEliminado = this.capitulos.pop(); // .pop() quita el último elemento
        console.log(` Se ha eliminado el capítulo: "${capituloEliminado}".`);
    }
};

// === PRUEBA DEL OBJETO EN LA CONSOLA ===

// 1. Probamos el método principal
libro.describirLibro();

// 2. Probamos agregar capítulos
console.log("\n--- Agregando Capítulos ---");
libro.agregarCapitulo("Capítulo 1: Macondo");
libro.agregarCapitulo("Capítulo 2: El Coronel");

// Vemos cómo quedó la lista de capítulos
console.log("Lista actual de capítulos:", libro.capitulos);

// 3. Probamos eliminar el último capítulo
console.log("\n--- Eliminando Último Capítulo ---");
libro.eliminarCapitulo();

// Verificamos la lista final
console.log("Lista final de capítulos:", libro.capitulos);