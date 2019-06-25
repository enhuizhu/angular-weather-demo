import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Weather } from '../model/weather';
import { RequestWeatherData } from './store/actions/weather';

@Component({
  selector: 'app-weather',
  template: `
    <app-search (citySearch)="citySearch($event)"></app-search>
    <app-results [weather]="weather | async"></app-results>  `
})
export class WeatherContainer {
  
  weather: Observable<Weather>;
  
  constructor(private store: Store<AppState>) { 
    this.weather = store.select('weather');
  }

  citySearch(e) {
    this.store.dispatch(new RequestWeatherData(e));
  }
}
