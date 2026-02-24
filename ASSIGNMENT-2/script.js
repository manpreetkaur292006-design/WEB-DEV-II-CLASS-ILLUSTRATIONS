
// weather api 

function getlocation(city){
const options = {method: 'GET', headers: {Authorization: 'Bearer key'}};

fetch('https://dataservice.accuweather.com/locations/v1/cities/search?q=%3Cstring%3E', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

fetch('https://dataservice.accuweather.com/currentconditions/v1/%city', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}



  // wrap bot the things in the functions and we can call them accordingly
  