
const apiKey = 'cbb0b276f1724b6fb1420151241811';
const city = 'London'; 

function callAPI() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    //https://api.weatherapi.com/v1/current.json?key=d21213cd96f675b80ffb3f95b64a2d9e&q=Davao&aqi=no
    //API key from https://www.weatherapi.com/ does not work


    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.querySelector("#weather_city").textContent = data.location.name || 'N/A';
        document.querySelector("#weather_temperature").textContent = `${data.current.temp_c}°C` || 'N/A';
        document.querySelector("#weather_condition").textContent = data.current.condition.text || 'N/A';
    });
}