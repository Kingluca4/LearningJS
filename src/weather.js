const axios = require('axios')

const apiKey = "77ea34b4246288115a4ec2d84de19d40"

const getWeather = async (city, region) => {
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city},${region}`;
    
    try {
        // Making a GET request
        const response = await axios.get(apiUrl);
        // Returning the data from the successful response
        return response.data;
    } catch (error) {
        // Returning the error message in case of an error
        throw new Error(error.message);
    }
}

module.exports = getWeather;