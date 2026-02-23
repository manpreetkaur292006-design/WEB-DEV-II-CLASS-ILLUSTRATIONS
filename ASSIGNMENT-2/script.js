
// weather api 

// const options = {method: 'GET', headers: {Authorization: 'Bearer zpka_208202a3448e45da80072ace8ef7d7d0_a3c48253'}};

// fetch('https://dataservice.accuweather.com/locations/v1/cities/search?q=%3Cstring%3E', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

const options = {method: 'GET', headers: {Authorization: 'Bearer zpka_208202a3448e45da80072ace8ef7d7d0_a3c48253'}};

fetch('https://dataservice.accuweather.com/currentconditions/v1/:202396', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));