import { Action } from '@ngrx/store'
import { Weather } from '../../../model/weather'
import * as WeatherAction from '../actions/weather'

const initialState: Weather = {
  city: null,
  cod: null,
  message: null,
  cnt: null,
  list: [],
}

export function WeatherReducer(state: Weather = initialState, action: WeatherAction.Actions) {
  switch(action.type) {
    case WeatherAction.RECEIVE_DATA:
      return action.payload;
    default:
      return state;
  }
}
