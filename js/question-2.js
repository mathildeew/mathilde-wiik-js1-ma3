// API key = afc2821b29994462b719350349a35236

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=afc2821b29994462b719350349a35236";

const gamesContainer = document.querySelector(".games");

async function getAPI() {
  const response = await fetch(url);

  const games = await response.json();

  gamesContainer.innerHTML = "";

  for (let i = 0; i < games.lenght; i++) {
    console.log(games[i].text);

    gamesContainer.innerHTML += `<div class="game">${games[i].text}</div>`;
  }
}

getAPI();
