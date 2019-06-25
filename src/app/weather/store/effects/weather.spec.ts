// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
import { WeatherEffects } from './weather';
import { GET_DATA, RECEIVE_DATA } from '../actions/weather';
import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { cold } from 'jasmine-marbles';

describe('weather effect', () => {
  function createServiceStub(response: any) {
    const service = jasmine.createSpyObj('WeatherService', [ 'searchWeatherForCity' ]);
    const isError = response instanceof Error;
    const serviceResponse = isError ? Observable.throw(response) : Observable.of(response);
    service.searchWeatherForCity.and.returnValue(serviceResponse);
    return service;
  }

  it('test effect', () => {
    const response = {"cod":"200","message":0.0125,"cnt":8,"list":[{"dt":1561496400,"main":{"temp":16.97,"temp_min":16.97,"temp_max":17.86,"pressure":1022.83,"sea_level":1022.83,"grnd_level":1017.66,"humidity":87,"temp_kf":-0.9},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":3.62,"deg":32.279},"sys":{"pod":"n"},"dt_txt":"2019-06-25 21:00:00"},{"dt":1561507200,"main":{"temp":16.19,"temp_min":16.19,"temp_max":16.86,"pressure":1024.24,"sea_level":1024.24,"grnd_level":1019.37,"humidity":84,"temp_kf":-0.67},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":98},"wind":{"speed":4.18,"deg":34.847},"sys":{"pod":"n"},"dt_txt":"2019-06-26 00:00:00"},{"dt":1561518000,"main":{"temp":15.93,"temp_min":15.93,"temp_max":16.37,"pressure":1024.87,"sea_level":1024.87,"grnd_level":1019.93,"humidity":84,"temp_kf":-0.45},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":3.86,"deg":35.973},"sys":{"pod":"n"},"dt_txt":"2019-06-26 03:00:00"},{"dt":1561528800,"main":{"temp":15.56,"temp_min":15.56,"temp_max":15.78,"pressure":1026.14,"sea_level":1026.14,"grnd_level":1021.15,"humidity":85,"temp_kf":-0.22},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":97},"wind":{"speed":4.58,"deg":38.081},"sys":{"pod":"d"},"dt_txt":"2019-06-26 06:00:00"},{"dt":1561539600,"main":{"temp":17.65,"temp_min":17.65,"temp_max":17.65,"pressure":1027.89,"sea_level":1027.89,"grnd_level":1022.78,"humidity":78,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":4.65,"deg":47.63},"sys":{"pod":"d"},"dt_txt":"2019-06-26 09:00:00"},{"dt":1561550400,"main":{"temp":18.5,"temp_min":18.5,"temp_max":18.5,"pressure":1028.86,"sea_level":1028.86,"grnd_level":1022.98,"humidity":74,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":6.56,"deg":28.346},"sys":{"pod":"d"},"dt_txt":"2019-06-26 12:00:00"},{"dt":1561561200,"main":{"temp":20.34,"temp_min":20.34,"temp_max":20.34,"pressure":1027.67,"sea_level":1027.67,"grnd_level":1022.16,"humidity":67,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":99},"wind":{"speed":6.29,"deg":41.687},"sys":{"pod":"d"},"dt_txt":"2019-06-26 15:00:00"},{"dt":1561572000,"main":{"temp":18.65,"temp_min":18.65,"temp_max":18.65,"pressure":1027.73,"sea_level":1027.73,"grnd_level":1022.29,"humidity":71,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":66},"wind":{"speed":6.26,"deg":42.896},"sys":{"pod":"d"},"dt_txt":"2019-06-26 18:00:00"}],"city":{"id":2643743,"name":"London","coord":{"lat":51.5085,"lon":-0.1258},"country":"GB","population":1000000,"timezone":3600}};
    const service = createServiceStub(response);
    const source = cold('a', { a: { type: GET_DATA } });
    const expected = cold('a', { a: { type: RECEIVE_DATA, payload: response } });
    const effects = new WeatherEffects(new Actions(source), service);

    expect(effects.loadWeather$).toBeObservable(expected);
  });
});