// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherService } from '../../weather.service';
import { GET_DATA, ReceiveWeatherData, ERROR, RequestError } from '../actions/weather'; 
import { of } from 'rxjs/observable/of';


@Injectable()
export class WeatherEffects {
  @Effect()
  loadWeather$ = this.actions$.pipe(
    ofType(GET_DATA),
    mergeMap((action: any) => 
      this.weatherService.searchWeatherForCity(action.payload)
      .pipe(
        map(weather =>(new ReceiveWeatherData(weather))),
        catchError(error => {
          alert(error.error.message);
          return of(new RequestError(error));
        })
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
