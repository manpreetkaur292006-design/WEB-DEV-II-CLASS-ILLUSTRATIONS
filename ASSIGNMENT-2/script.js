
// ASYNC WEATHER TRACKER USING API

// WE CAN USE API FROM ANY OF THE SITE ACCUWEATHER AND OPEN WEATHER FOR THIS.

// WE ARE HERE USING OPEN WEATHER API

// API key :- 2021306ceb8064a5730e274654b326c6

// BUILD AN API REQUEST USING CITY NAME :
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric 
// &units=metric  : to get temperature in degree celsius


async function fetchData(city) {
    try {
        const API_key = "2021306ceb8064a5730e274654b326c6";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}
fetchData("london")

