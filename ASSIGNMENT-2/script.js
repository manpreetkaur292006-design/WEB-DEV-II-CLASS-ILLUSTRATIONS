
// ASYNC WEATHER TRACKER USING API

// WE CAN USE API FROM ANY OF THE SITE ACCUWEATHER AND OPEN WEATHER FOR THIS.

// WE ARE HERE USING OPEN WEATHER API

// API key :- 2021306ceb8064a5730e274654b326c6

// BUILD AN API REQUEST USING CITY NAME :
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getData(city) {
  try{
    const API_Key="2021306ceb8064a5730e274654b326c6";
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}
`);
      const data=await response.json();
      console.log(data);
  }catch(err){
    console.log(err);
  }
}
getData("Haryana")