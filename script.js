// OpenWeatherMap API Key
const apiKey = 'Your API Key'; 

// 1. Функция для погоды
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) return alert('Please enter a city');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById('description').innerText = data.weather[0].description;
            // Иконка погоды
            const iconCode = data.weather[0].icon;
            document.getElementById('weatherIcon').innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png">`;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// 2. Функция для крипты
async function getCrypto() {
    try {
        const response = await fetch('https://api.coingecko.org/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();

        document.getElementById('btcPrice').innerText = `$${data.bitcoin.usd.toLocaleString()}`;
        document.getElementById('ethPrice').innerText = `$${data.ethereum.usd.toLocaleString()}`;
        
        const now = new Date();
        document.getElementById('syncTime').innerText = now.toLocaleTimeString();
    } catch (error) {
        console.error('Error fetching crypto:', error);
    }
}

// Запускаем крипту при загрузке
getCrypto();