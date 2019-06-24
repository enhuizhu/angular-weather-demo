import { Observable } from 'rxjs';
import { Component, OnChanges, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Weather } from '../../../model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  @Input() weather: Weather;
  
  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
}


