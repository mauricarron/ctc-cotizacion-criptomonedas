class API {
  constructor(apikey) {
    this.apikey = apikey;
  }

  async obtenerMonedasAPI() {
    const url = `https://min-api.cryptocompare.com/data/blockchain/list?api_key=${this.apikey}`;
    const urlObtenerMonedas = await fetch(url);
    const listaMonedas = await urlObtenerMonedas.json();
    return listaMonedas;
  }
}
