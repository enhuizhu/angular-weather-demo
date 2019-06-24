import { ActionReducerMap } from '@ngrx/store';
import { WeatherReducer } from './reducers/weather';
import { WeatherEffects } from '../store/effects/weather';
import { AppState } from '../../app.state';
// export const reducers = StoreModule.forRoot({
//   weather: reducer,
// })
export const reducers: ActionReducerMap<AppState> = {
  weather:  WeatherReducer,
};

// export const reducers = {
//   weather: WeatherReducer,
// };

export const effects: any[] = [ WeatherEffects ];