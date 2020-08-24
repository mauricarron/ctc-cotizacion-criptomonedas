class Interfaz {
  mostrarMensaje(mensaje, clases) {
    const div = document.createElement("div");
    div.classList = clases;
    div.appendChild(document.createTextNode(mensaje));

    const $mensajes = document.querySelector(".mensajes");
    $mensajes.appendChild(div);
    setTimeout(() => {
      document.querySelector(".mensajes div").remove();
    }, 3000);
  }
}
