// ASYNC WEATHER TRACKER USING API

// WE CAN USE API FROM ANY OF THE SITE ACCUWEATHER AND OPEN WEATHER FOR THIS.

// WE ARE HERE USING OPEN WEATHER API

// API key :- 2021306ceb8064a5730e274654b326c6

// BUILD AN API REQUEST USING CITY NAME :
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
// &units=metric  : to get temperature in degree celsius

const API_key = "2021306ceb8064a5730e274654b326c6";
const weatherBox = document.getElementById("weather-info");
const historyBox = document.getElementById("s-history");
const cityInput = document.getElementById("location");

// WEATHER FETCH
async function fetchData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("City not Found !")
    alert("City not Found !!")
  }
}


// BUTTON CLICK
document.getElementById("search-btn").onclick = () => {
  const city = cityInput.value.trim();
  if (city) {
    search(city);
  }
};

// UI RENDER
function renderWeather(d) {
  weatherBox.innerHTML = `
        <h2>Search History</h2>
        <div class="weather-item"><label>City</label><span>${d.name}, ${d.sys.country}</span></div>
        <div class="weather-item"><label>Temperature</label><span>${d.main.temp} °C</span></div>
        <div class="weather-item"><label>Weather</label><span>${d.weather[0].main}</span></div>
        <div class="weather-item"><label>Humidity</label><span>${d.main.humidity}%</span></div>
        <div class="weather-item"><label>Wind Speed</label><span>${d.wind.speed} m/s</span></div>
    `;
}

// SAVE SEARCH HISTORY
function saveHistory(city) {}

// SHOW HISTORY
function showHistory() {}

// SEARCH FUNCTION
async function search(city) {
  weatherBox.innerHTML = "";
  try {
    const data = await fetchData(city);
    renderWeather(data);
    saveHistory(data.name);
  } catch (error) {
    weatherBox.innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}

// ENTER KEY SEARCH
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) {
      search(city);
    }
  }
});

// INITIAL LOAD
showHistory();


// DARK AND LIGHT MODES - NEW ADDITIONAL FEATURE
const savedTheme = localStorage.getItem("x");
if (savedTheme) {
    document.body.className = savedTheme;
    // document.getElementById("event-loop") = savedTheme;
    // document.getElementById("search-btn") = savedTheme;
    // document.getElementById("btn") = savedTheme;
}

// FUNCTION TO CHANGE THEME
function setTheme(mode) {
    document.body.className = mode;
    // document.getElementById("event-loop") = mode;
    // document.getElementById("search-btn") = mode;
    // document.getElementById("btn") = mode;
    localStorage.setItem("x", mode);
}