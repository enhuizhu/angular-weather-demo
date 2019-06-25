// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { WeatherService } from '../../weather.service';
import { GET_DATA, RECEIVE_DATA } from '../actions/weather'; 


@Injectable()
export class WeatherEffects {
  @Effect()
  loadWeather$ = this.actions$.pipe(
    ofType(GET_DATA),
    mergeMap((action: any) => 
      this.weatherService.searchWeatherForCity(action.payload)
      .pipe(
        map(weather =>({type: RECEIVE_DATA, payload: weather}))
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
