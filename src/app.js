function formatdate(timestamp) {
    let date = new Date (timestamp);
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
  
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[date.getDay()];

     return `${day} ${hour}:${minutes}`
}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature")
    temperatureElement.innerHTML = Math.round(response.data.main.temp);

    let cityElement = document.querySelector("#city")
    cityElement.innerHTML = response.data.name;

    let descriptionElement = document.querySelector("#description")
    descriptionElement.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity")
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind")
    windElement.innerHTML = Math.round(response.data.wind.speed);

    let dateElement = document.querySelector("#date")
    dateElement.innerHTML = formatdate(response.data.dt * 1000);    
}

let apiKey = "251603b3b44255d6a7ae3a0215435b62";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);