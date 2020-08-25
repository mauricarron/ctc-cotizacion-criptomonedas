const COTIZADOR = new API(
  "48f64a369405db70882eebbe18c6e531eb6e8905c737d810cc726411d985cd2f"
);
const UI = new Interfaz();

const $formulario = document.querySelector("#formulario");
$formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const $monedaInput = document.querySelector("#moneda");
  const monedaSeleccionada =
    $monedaInput.options[$monedaInput.selectedIndex].value;
  const $criptomonedaInput = document.querySelector("#criptomoneda");
  const criptomonedaSeleccionada =
    $criptomonedaInput.options[$criptomonedaInput.selectedIndex].value;

  if (monedaSeleccionada === "" || criptomonedaSeleccionada === "") {
    UI.mostrarMensaje(
      "Ambos Campos Son Obligatorios",
      "alert bg-danger text-centered"
    );
  } else {
    COTIZADOR.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada).then(
      (data) => {
        UI.mostrarResultado(
          data.RAW,
          monedaSeleccionada,
          criptomonedaSeleccionada
        );
      }
    );
  }
});
