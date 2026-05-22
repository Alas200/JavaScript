// 1. Creamos el objeto "auto" con sus propiedades y su método
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2024,

    // 2. Definimos el método para mostrar la información
    mostrarInfo: function() {
        // "this" le dice a JavaScript que busque la propiedad dentro de ESTE mismo objeto
        console.log(`🚗 Información del Auto:`);
        console.log(`- Marca: ${this.marca}`);
        console.log(`- Modelo: ${this.modelo}`);
        console.log(`- Año: ${this.año}`);
    }
};

// === PRUEBA DEL CÓDIGO ===

// Ejecutamos el método del objeto para ver la información en la consola
auto.mostrarInfo();