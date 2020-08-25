class Interfaz {
  constructor() {
    this.init();
  }

  init() {
    this.construirSelect();
  }

  construirSelect() {
    COTIZADOR.obtenerMonedasAPI().then((monedas) => {
      for (const [key, value] of Object.entries(monedas.Data)) {
        const select = document.createElement("option");
        select.value = value.Symbol;
        select.appendChild(document.createTextNode(value.CoinName));
        document.querySelector("select#criptomoneda").appendChild(select);
      }
    });
  }

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

  mostrarResultado(resultado, moneda, criptomoneda) {
    const datosMoneda = resultado[criptomoneda][moneda];
    let precio = datosMoneda.PRICE.toFixed(2);
    let variacion = datosMoneda.CHANGEPCTDAY.toFixed(2);
    let actualizado = new Date(
      datosMoneda.LASTUPDATE * 1000
    ).toLocaleDateString("es-AR");

    let templateHTML = `
        <div class="card bg-success">
            <div class="card-body">
                <h2 class="card-title">Resultado: </h2>
                <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL}
                es de: $${precio}</p>
                <p>Variación último día: %${variacion}</p>
                <p>Última Actualización: ${actualizado}</p>
            </div>
        </div>
    `;

    document.querySelector("#resultado").innerHTML = templateHTML;
  }
}
