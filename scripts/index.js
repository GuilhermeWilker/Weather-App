const KEY = "64ed9b6f709f8a4f81caf731196ca857";
const searchInput = document.querySelector("#cidadeValue");

const city = document.getElementById("cidade");
const data = document.getElementById("data");
const desc = document.getElementById("clima");
const temperatura = document.getElementById("temperatura");
const icon = document.getElementById("icon");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");

// Fetch da API, para obter os dados climáticos.
function previsaoTempo(cidade) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${KEY}&lang=pt_br`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((cidade) => {
      gerarPrevisaoTempo(cidade);
    });
}

// Função para gerar display da previsão de determinada localidade na tela do usuário.
function gerarPrevisaoTempo(weather) {
  console.log(weather);

  city.innerHTML = `${weather.name}`;

  temperatura.innerHTML = `${Math.round(weather.main.temp)}°`;

  desc.innerHTML = `${weather.weather[0].description}`;

  let iconName = weather.weather[0].icon;

  icon.innerHTML = `<img src="icones/${iconName}.png" />`;

  wind.innerHTML = `${weather.wind.speed}`;

  humidity.innerHTML = `${weather.main.humidity}%`;
}

// Buscar cidade apartir do valor digitado no input

searchInput.addEventListener("keyup", (e) => {
  const nomeCidade = e.target.value;
  const key = e.wich || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    previsaoTempo(searchInput.value);
  }
});

// Display do dia da semana
let now = new Date();
data.innerText = dateBuilder(now);
function dateBuilder(d) {
  let days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julio",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let day = days[d.getDay()]; //getDay: 0-6
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}`;
}

gerarPrevisaoTempo();
