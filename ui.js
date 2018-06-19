class UI {
  startLoader(){
    document.getElementById('loader').innerHTML =
    `<div class="col-md-6 mx-auto text-center">
    <img src="/icons/loading.gif" alt="" id="loading"  style="max-width: 150px;">
    </div>
    `;
    document.getElementById('city-info').innerHTML = '';
  }
  showCity(city){
    this.clearAlert();
    this.startLoader();
    setTimeout(function(){
      document.getElementById('loader').innerHTML = '';
      document.getElementById('city-info').innerHTML =`
      <div class="col-md-6 mx-auto bg-info p-5 mb-5">
        <h1 class="text-light">${city.name}, ${city.main.temp} &deg;C</h1> 
        <h4>${city.weather[0].main} <img src="/icons/${city.weather[0].icon}.png" style="max-width: 50px;"></h4>
        <h4>Cloudiness: ${city.clouds.all} %</h4>
        <br>
        <div class="list-group">
          <div class="list-group-item lead">
            Humidity: ${city.main.humidity} <span class="text-primary">%</span>
          </div>
          <div class="list-group-item lead">
            Wind speed: ${city.wind.speed} <span class="text-primary">meter/sec</span>
          </div>
          <div class="list-group-item lead">
            Max temp: ${city.main.temp_max} <span class="text-primary">&deg;C</span>
          </div>
          <div class="list-group-item lead">
            Min temp: ${city.main.temp_min} <span class="text-primary">&deg;C</span>
          </div>
        </div>
      </div>
    `
    }, Math.random() * (3000 - 500) + 500);
  }
  showAlert(){
    this.clearAlert();
    const col = document.getElementById('first-col');
    const h1 = document.getElementById('app-name');
    const alert = document.createElement("div");
    alert.className = "alert alert-dismissible alert-danger";
    alert.innerHTML = `<button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Oh snap!</strong> Please enter a city name and try again.`
    col.insertBefore(alert, h1);
  }
  clearAlert() {
    const alert = document.querySelector('.alert');
    if(alert){
      alert.remove();
      console.log('haha');
    }
  }
}