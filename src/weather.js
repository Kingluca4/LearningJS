const axios = require('axios')

const apiKey = "77ea34b4246288115a4ec2d84de19d40"

const  getWeather = async (city, region) => {
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city},${region}`;
    // Making a GET request
    await axios.get(apiUrl)
  .then(response => {
    // Handle the successful response
    return response.data;
  })
  .catch(error => {
    // Handle errors
    return error.message;
  });
}

module.exports = getWeather;