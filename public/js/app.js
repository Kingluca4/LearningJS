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
        } catch (error) {
        console.error('Error making GET request:', error.message);
    }
});
