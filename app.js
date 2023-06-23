let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cambiarCita() {
  let indeceAleatorio = generarEnteroAleatorio(0, citas.length - 1);
  citaElem.innerText = `"${citas[indeceAleatorio].texto}"`;
  autorElem.innerText = citas[indeceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener("click", cambiarCita);
