// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.


let numeroAdivinar = 0;
let formuario = document.querySelector("#formulario");

//agregar eventos desde js
formulario.addEventListener("submit", adivinar);

function comenzarJuego() {
  numeroAdivinar = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  console.log(numeroAdivinar);
}

function adivinar(e) {
  e.preventDefault();
  console.log("desde la funcion submit");
  let numeroIngresado = document.querySelector("#inputAdivinar").value;
  console.log(numeroAdivinar);
}
if (aleatorio == valor) {
  alert(
    "¡Acertaste! Tu número " +
      valor +
      " es igual al número mágico " +
      aleatorio +
      "."
  );
} else if (aleatorio < valor) {
  alert(
    "¡Fallaste! Tu número " +
      valor +
      " es mayor al número mágico " +
      aleatorio +
      "."
  );
} else if (aleatorio > valor) {
  alert(
    "¡Fallaste! Tu número " +
      valor +
      " es menor al número mágico " +
      aleatorio +
      "."
  );
}