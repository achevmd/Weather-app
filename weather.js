class Weather {
  constructor() {
    this.apiKey = 'd8419cfa9b5139d3fa615266fef4f24b';
    this.units = 'metric'
  }
  async getWeather(city) {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&units=${this.units}&APPID=${this.apiKey}`);
    const data = await response.json();
    return {
      data
    }
  }

}