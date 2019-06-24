import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { Actions } from '@ngrx/effects';

// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { StoreModule } from '@ngrx/store';
import { WeatherReducer } from './store/reducers/weather'
import { EffectsModule,  } from '@ngrx/effects';

import { 
  reducers, 
  effects 
} from './store';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      weather: WeatherReducer
    }),
    // StoreModule.forFeature('weather', reducers),
    EffectsModule.forRoot(effects)
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer
  ],
  providers: [
    WeatherService,
    Actions,
  ]
})
export class WeatherModule { }
