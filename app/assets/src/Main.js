import Core from "./Core.js";

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const App = document.getElementById("app");
  const F_buscarCep = async (evt) => {
    evt.preventDefault()

    const cep = document.getElementById("_cep").value
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`, { method: 'GET' })
    const json = await res.json()

    client.trigger('putAdress', `Você fala de ${json.localidade}?`)
  }
  let appBody = `<div id="main-content"><form id="form"><input type="text" name="_cep" id="_cep" /><br/><button type="submit">Buscar</button></form></div>`;

  // Write App
  App.innerHTML = appBody;

  document.getElementById("form").addEventListener('submit', F_buscarCep)
};

export default Main;
