import { ActionReducerMap } from '@ngrx/store';
import { WeatherReducer } from './reducers/weather';
import { WeatherEffects } from '../store/effects/weather';
import { AppState } from '../../app.state';

export const reducers: ActionReducerMap<AppState> = {
  weather:  WeatherReducer,
};


export const effects: any[] = [ WeatherEffects ];