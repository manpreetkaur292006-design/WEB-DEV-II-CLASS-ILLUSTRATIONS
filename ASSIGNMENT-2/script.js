
// weather api 

// const options = {method: 'GET', headers: {Authorization: 'Bearer key'}};

// fetch('https://dataservice.accuweather.com/locations/v1/cities/search?q=%3Cstring%3E', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

const options = {method: 'GET', headers: {Authorization: 'Bearer key'}};

fetch('https://dataservice.accuweather.com/currentconditions/v1/:202396', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));