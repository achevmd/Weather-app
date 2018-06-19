// init weather class
const weather = new Weather;
// init ui class
const ui = new UI;

const inputCity = document.getElementById('city');

document.getElementById('button').addEventListener('click', 
function(e) {
  if(inputCity.value === '') {
    ui.showAlert();
  } else 
  {
  weather.getWeather(inputCity.value)
    .then(data => ui.showCity(data.data));
  }
});