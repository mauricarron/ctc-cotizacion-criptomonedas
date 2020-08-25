class API {
  constructor(apikey) {
    this.apikey = apikey;
  }

  async obtenerMonedasAPI() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
    const urlObtenerMonedas = await fetch(url);
    const listaMonedas = await urlObtenerMonedas.json();
    return listaMonedas;
  }

  async obtenerValores(moneda, criptomoneda) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;
    const urlData = await fetch(url);
    const data = await urlData.json();
    return data;
  }
}
