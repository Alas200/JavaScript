// 1. Declaramos la variable nota (puedes cambiar este valor para probar)
let nota = 85; 

// 2. Verificamos si la nota es mayor que 0 (evaluación truthy/valor válido)
if (nota > 0) {
    
    // 3. Determinamos el rango usando operadores de comparación
    if (nota >= 90) {
        console.log("Nota: " + nota + ". ¡Excelente! Has aprobado con honores.");
    } 
    else if (nota >= 75) {
        console.log("Nota: " + nota + ". ¡Bien! Has aprobado satisfactoriamente.");
    } 
    else if (nota >= 60) {
        console.log("Nota: " + nota + ". Suficiente. Has aprobado, pero necesitas mejorar.");
    } 
    else {
        console.log("Nota: " + nota + ". No has aprobado. ¡Sigue intentándolo!");
    }

} else if (nota === 0) {
    console.log("Nota: 0. No aprobado.");
} else {
    console.log("Error: La nota ingresada no es válida.");
}