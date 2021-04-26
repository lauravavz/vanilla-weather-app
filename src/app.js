function displayTemperature(response) {
    console.log(response.data);
}



let apiKey = "c9b707c9a800bc82a565bfc394bcf972";
let apiUrl = "api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=c9b707c9a800bc82a565bfc394bcf972&units=metric";
axios.get(apiUrl).then(displayTemperature);