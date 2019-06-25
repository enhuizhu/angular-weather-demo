import { Action } from '@ngrx/store';
import { Weather } from '../../../model/weather';
export const GET_DATA = 'GET_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
export class ReceiveWeatherData implements Action {
  readonly type = RECEIVE_DATA;
  constructor(public payload: Weather) {}
}

export class RequestWeatherData implements Action {
  readonly type = GET_DATA;
  constructor(public payload: string){}
}

export type Actions = ReceiveWeatherData | RequestWeatherData;