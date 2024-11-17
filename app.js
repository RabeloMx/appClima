// API key de OpenWeatherMap
const API_KEY = 'Your-api-key';

// Función para obtener el clima
function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Por favor, ingresa una ciudad.");
        return;
    }

    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherData = `
                    <p><strong>Ciudad:</strong> ${data.name}</p>
                    <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
                    <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
                    <p><strong>Descripción:</strong> ${data.weather[0].description}</p>
                    <p><strong>Viento:</strong> ${data.wind.speed} m/s</p>
                `;
                document.getElementById("weather-result").innerHTML = weatherData;
            } else {
                document.getElementById("weather-result").innerHTML = `<p>No se encontró la ciudad</p>`;
            }
        })
        .catch(error => {
            document.getElementById("weather-result").innerHTML = `<p>Error al obtener los datos</p>`;
            console.error("Error:", error);
        });
}
