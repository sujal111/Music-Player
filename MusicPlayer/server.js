const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://genius-song-lyrics1.p.rapidapi.com/search',
  params: {q: 'Alan Walker', per_page: '10', page: '1'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});