
// weather api
// async wether tracker

function getlocation(city){
const options = {method: 'GET', headers: {Authorization: 'Bearer zpka_208202a3448e45da80072ace8ef7d7d0_a3c48253'}};

fetch('https://dataservice.accuweather.com/locations/v1/cities/search?q=%3Cstring%3E', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

fetch('https://dataservice.accuweather.com/currentconditions/v1/%city', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}



  // wrap both the things in the functions and we can call them accordingly
  