//  API key = afc2821b29994462b719350349a35236

const gamesContainer = document.querySelector(".games");

async function getAPI() {
  try {
    const response = await fetch("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=afc2821b29994462b719350349a35236");
    const data = await response.json();
    if (!response.ok) {
      throw Error("Network response error.");
    }

    console.log(data);
    gamesContainer.innerHTML = "";

    data.results.forEach((element) => {
      gamesContainer.innerHTML += `<li><h2>${element.name}</h2><p>Rating: ${element.rating}</p><p>Number of tags: ${element.tags.length}</li>`;
    });
  } catch (e) {
    gamesContainer.innerHTML = "There's an error when handling the API.";
    console.log("An error occurred:", e.message);
  }
}

getAPI();
