import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { GET_DATA } from './store/actions/weather';
import { Observable } from 'rxjs';
import { Weather } from '../model/weather';

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
    // TO BE IMPLMENTED
    this.store.dispatch({type: GET_DATA, payload: e});
  }
}
