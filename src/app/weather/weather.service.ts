import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';  
  
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(private http: HttpClient) { }

  searchWeatherForCity(city) {
    // implement the service
    return this.http.get(`
      ${this.url}/?q=${city}&appid=${this.params.APPID}&cnt=${this.params.cnt}&units=${this.params.units}
    `)
  }
}
