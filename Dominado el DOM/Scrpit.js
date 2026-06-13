// PASO 1: Capturar los elementos del DOM que necesitamos controlar
const sliderLongitud = document.getElementById('slider-longitud');
const valorLongitud = document.getElementById('valor-longitud');
const formulario = document.getElementById('formulario-generador');
const resultadoPassword = document.getElementById('resultado-password');
const btnCopiar = document.getElementById('btn-copiar');

const checkMayusculas = document.getElementById('check-mayusculas');
const checkMinusculas = document.getElementById('check-minusculas');
const checkNumeros = document.getElementById('check-numeros');
const checkSimbolos = document.getElementById('check-simbolos');

// PASO 2: Crear los "bancos" de letras y números que usaremos para armar la clave
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// PASO 3: Evento en vivo para actualizar el número de la longitud al mover el slider
sliderLongitud.addEventListener('input', function() {
    // Almacenamos el número actual del deslizador y lo pintamos en la pantalla
    valorLongitud.textContent = sliderLongitud.value;
});

// PASO 4: Escuchar cuando el usuario hace clic en el botón "GENERATE"
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos que la página se reinicie

    const longitud = parseInt(sliderLongitud.value); // Convertimos el texto del slider a número
    let bolsaDeCaracteres = ""; // Aquí meteremos todas las letras que el usuario acepte usar

    // Usamos ".checked" que devuelve true si la casilla tiene la palomita verde
    if (checkMayusculas.checked) {
        bolsaDeCaracteres += letrasMayusculas;
    }
    if (checkMinusculas.checked) {
        bolsaDeCaracteres += letrasMinusculas;
    }
    if (checkNumeros.checked) {
        bolsaDeCaracteres += numeros;
    }
    if (checkSimbolos.checked) {
        bolsaDeCaracteres += simbolos;
    }

    // Validación: Si el usuario desmarcó TODO, no podemos generar nada
    if (bolsaDeCaracteres === "") {
        alert("¡Por favor, selecciona al menos una de las opciones!");
        return;
    }

    // PASO 5: Bucle matemático para elegir letras al azar
    let passwordGenerada = "";
    for (let i = 0; i < longitud; i++) {
        // Generamos una posición matemática aleatoria dentro de nuestra gran bolsa
        const indiceAleatorio = Math.floor(Math.random() * bolsaDeCaracteres.length);
        // Extraemos esa letra y la añadimos al string de la contraseña
        passwordGenerada += bolsaDeCaracteres.charAt(indiceAleatorio);
    }

    // PASO 6: Mostramos la contraseña final en la pantalla superior (.value)
    resultadoPassword.value = passwordGenerada;
});

// PASO 7: Programar el botón de copiar (clipboard)
btnCopiar.addEventListener('click', function() {
    if (resultadoPassword.value === "") return; // Si no hay clave, no hacemos nada
    
    // Le ordenamos al navegador que copie el texto al portapapeles de la computadora
    navigator.clipboard.writeText(resultadoPassword.value);
    alert("¡Contraseña copiada al portapapeles! 📋");
});