import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WeatherContainer } from './weather.container';

import { StoreModule } from '@ngrx/store';
import { EffectsModule,  } from '@ngrx/effects';
import { WeatherService } from './weather.service';

import { 
  reducers, 
  effects 
} from './store';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContainer ],
      imports: [ 
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        HttpClientModule,
      ],
      providers: [ WeatherService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should contain search element and result element', () => {
    const searchEl = fixture.nativeElement.querySelector('app-search');
    const resultEl = fixture.nativeElement.querySelector('app-results');
    expect(searchEl).toBeTruthy();
    expect(resultEl).toBeTruthy();
  });
});
