
        const input = document.querySelector('input');
        const button = document.querySelector('button');
        const temp = document.querySelector('.temp');
        const cityName = document.querySelector('.city');
        const humidity = document.querySelector('.humidity');
        const weatherIcon = document.querySelector('.weather-icon');
        const wind = document.querySelector('.wind');

        const weatherTemplate = document.querySelector('.weather');

        button.addEventListener('click', function () {
            if (input.value === '') {
                alert('Please Enter the city name');
            } else if (!isNaN(input.value)) {
                document.querySelector('.error').style.display = 'block';
                weatherTemplate.style.display = 'none';
            } else {
                getWeatherInfo(input.value);
                document.querySelector('.error').style.display = 'none';
                input.value = '';
            }
        });

        async function getWeatherInfo(city) {
            const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
            const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

            try {
                const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
                if (response.status === 404) {
                    document.querySelector('.error').style.display = 'block';
                    weatherTemplate.style.display = 'none';
                } else {
                    const data = await response.json();

                    tempChange(data.main.temp);
                    showHumidity(data.main.humidity + "%");
                    windSpeed(data.wind.speed + " km/hr");
                    showCity(data.name);

                    if (data.weather[0].main === 'Clouds') { // Corrected case for 'Clouds'
                        weatherIcon.src = 'images/clouds.png';
                    } else if (data.weather[0].main === 'Rain') { // Corrected case for 'Rain'
                        weatherIcon.src = 'images/rain.png';
                    } else if (data.weather[0].main === 'Mist') { // Corrected case for 'Mist'
                        weatherIcon.src = 'images/mist.png';
                    } else if (data.weather[0].main === 'Clear') { // Corrected case for 'Clear'
                        weatherIcon.src = 'images/clear.png';
                    } else if (data.weather[0].main === 'Drizzle') { // Corrected case for 'Drizzle'
                        weatherIcon.src = 'images/drizzle.png';
                    }

                    weatherTemplate.style.display = 'block';
                    document.querySelector('.error').style.display = 'none';
                }
            } catch (error) {
                console.log(error);
            }
        }

        function showCity(city) {
            cityName.innerHTML = city;
        }

        function windSpeed(speed) {
            wind.innerHTML = speed;
        }

        function showHumidity(humidityValue) {
            humidity.innerHTML = humidityValue;
        }

        function tempChange(temperature) {
            temp.innerHTML = Math.floor(parseInt(temperature)) + " °C";
        }

