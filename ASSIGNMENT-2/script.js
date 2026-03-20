// ASYNC WEATHER TRACKER USING API - (see sem-2 assignment for full correct code")

// WE CAN USE API FROM ANY OF THE SITE ACCU-WEATHER AND OPEN WEATHER FOR THIS.

// WE ARE HERE USING OPEN WEATHER API

// API key :- 2021306ceb8064a5730e274654b326c6

// BUILD AN API REQUEST USING CITY NAME :
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
// &units=metric  : to get temperature in degree celsius

const API_key = "2021306ceb8064a5730e274654b326c6";  // storing the API key in the variable

// targeting all the elements that we need
const weatherBox = document.getElementById("weather-info");
const historyBox = document.getElementById("s-history");
const cityInput = document.getElementById("location");

// creating an empty searchHistory list
let searchHistory=[]; 

// WEATHER FETCH - using async and await

// here we have created a fecthData function that will take city as an input and then we have
// made a try block which will run when everything runs properly means if the response is ok then
// it will return data otherwise throw an error and there is another block catch block which will run
// when there is an error 
// we use try and except block for better exception handling.
async function fetchData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`,
    );
    const data = await response.json();
    if (response.ok){
      return data;
    }else{
      throw new Error("City not Found !")
    }
    
  } catch (err) {
    console.error(err);
    throw new Error("City not Found !")
  }
}



// UI RENDER - here we have created a function which will create and display the weather 
// info on the weather info div that we have created
function renderWeather(d) {
  weatherBox.innerHTML = `
        <h2>Weather Info</h2>
        <div class="weather-item"><label>City</label><span>${d.name}, ${d.sys.country}</span></div>
        <div class="weather-item"><label>Temperature</label><span>${d.main.temp} °C</span></div>
        <div class="weather-item"><label>Weather</label><span>${d.weather[0].main}</span></div>
        <div class="weather-item"><label>Humidity</label><span>${d.main.humidity}%</span></div>
        <div class="weather-item"><label>Wind Speed</label><span>${d.wind.speed} m/s</span></div>
    `;
}

// SAVE SEARCH HISTORY - in this section we have created a function that will save the search history
function saveHistory(city) {
  // removing the city if the already exists
  for (let i=0; i<searchHistory.length; i++){
    if (searchHistory[i]===city){  // checking that weather that city is in the searchHistory or not 
      let temp=searchHistory[i];
      searchHistory.splice(i,1);  // it will remove the element staring from i and 1 element from the searchHistory
      break;
    }
  }
  searchHistory.unshift(city); // adding the new city in the starting 

// checking that the if the number of elements in the search history exceeds the limit of 5 
// then it will pop the last element of the searchHistory list 
if (searchHistory.length>5){
  searchHistory.pop();
}
console.log("History saved :",searchHistory); // printing the search history
}


// SHOW HISTORY - in this we have created a function to show the search history 
function showHistory() {
  // checking whether the search history exists or not 
  // if there is no search history then it will print the following message
  if (searchHistory.length===0){  
    historyBox.innerHTML = '<p style="color:#666; font-style:italic;">No searches yet</p>';
    return;  // stops the function
  }

let buttonsHTML='';  // creating an empty box to write the html code
// using the for loop to build the buttons and writing the html code in the buttonsHTML
for (let i = 0; i < searchHistory.length; i++) {
    buttonsHTML += `
      <button class="history-btn" onclick="search('${searchHistory[i]}')">
        ${searchHistory[i]}
      </button><br>
    `;
  }
  historyBox.innerHTML = buttonsHTML;  // this will take the html string and make a button on the webpage
}



// SEARCH BUTTON CLICK
document.getElementById("search-btn").onclick = () => {  // targeting the search btn and adding the onclick functionality
  const city = cityInput.value.trim(); // getting the city from the input box
  if (city) { // checking that if the city is not empty
    search(city);  // search for the city 
  }
};

// SEARCH FUNCTION
async function search(city) {  // defining an async function for the search functionality
  weatherBox.innerHTML = '<p style="text-align:center">Loading...</p>';  // this will show loading on the screen when we are showing the data

  // we are using try and except block for exception handling
  try { 
    const data = await fetchData(city); // fetching the data of weather from API
    renderWeather(data);  // displaying the weather 
    saveHistory(city);  // saving the search history to the history
    showHistory();  // shows history buttons
    cityInput.value='';  // clearing the input box
  } catch (error) {  // error handling part
    weatherBox.innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}

// ENTER KEY SEARCH - when pressed enter shows the weather
cityInput.addEventListener("keydown", (e) => {  // adding the keydown event listener when we press enter
  if (e.key === "Enter") {  // checking that the enter is pressed or not
    const city = cityInput.value.trim(); // getting the city from the input box
    if (city) {  // checking that if the city is not empty
      search(city);  // search for the city 
    }
  }
});

// INITIAL LOAD - when the page will load it will immediately show the history buttons
showHistory(); 


// DARK AND LIGHT MODES - NEW ADDITIONAL FEATURE
const savedTheme = localStorage.getItem("theme");  // checking whether which theme is saved
if (savedTheme) {  // if theme exists 
    document.body.className = savedTheme;  // apply that theme
}
// FUNCTION TO CHANGE THEME
function setTheme(mode) {  // checking when the the light/dark btn is clicked 
    document.body.className = mode;  // it will change the webpage colors according to the users choice
    localStorage.setItem("theme", mode);  // saving the choice in the local storage forever
}