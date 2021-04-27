function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
}



let apiKey = "c9b707c9a800bc82a565bfc394bcf972";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=c9b707c9a800bc82a565bfc394bcf972&units=metric";
axios.get(apiUrl).then(displayTemperature);