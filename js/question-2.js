// API key = afc2821b29994462b719350349a35236

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=afc2821b29994462b719350349a35236";

const gamesContainer = document.querySelector(".games");

async function getAPI() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const games = data.all;

    gamesContainer.innerHTML = "";

    for (let i = 0; i < games.lenght; i++) {
      console.log(games[i].text);

      if (i === 8) {
        break;
      }
      gamesContainer.innerHTML = `${games[i].text}`;
    }
  } catch (error) {
    console.log("an error");
    gamesContainer.innerHTML = `An error occurered when handling the API request`;
  }
}

getAPI();
