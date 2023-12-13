console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')


weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const location = search.value

    console.log(location);
})


document.getElementById('weatherInfo').addEventListener('click', async function () {
    const inputUno = document.getElementById('inputCity').value;
    const inputDue = document.getElementById('inputRegion').value;
    
    const apiUrl = `http://localhost:3000/weather?city=${inputUno}&region=${inputDue}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('GET request successful');
        console.log('Response data:', data);

        const { temperature, humidity } = data.current;
        const { name, country, region } = data.location;

        const displayText = `Temperature: ${temperature}°C\nName: ${name}\nCountry: ${country}\nRegion: ${region}\nHumidity: ${humidity}`;
        document.getElementById("myResults").innerText = displayText;

        // const ul = document.createElement('ul');

        // Add list items for each property in the location object
        // for (const key in data.location) {
        //     const li = document.createElement('li');
        //     li.textContent = `${key}: ${data.location[key]}`;
        //     ul.appendChild(li);
        // }

        // // Add temperature and humidity to the list
        // const temperatureLi = document.createElement('li');
        // temperatureLi.textContent = `Temperature: ${temperature}°C`;
        // ul.appendChild(temperatureLi);

        // const humidityLi = document.createElement('li');
        // humidityLi.textContent = `Humidity: ${humidity}`;
        // ul.appendChild(humidityLi);

        // // Display the list in the HTML element with id "myResults"
        // document.getElementById("myResults").innerHTML = '';
        // document.getElementById("myResults").appendChild(ul);

    } catch (error) {
        console.error('Error making GET request:', error.message);
    }
});
