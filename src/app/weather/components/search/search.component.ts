import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
  @Output() citySearch = new EventEmitter<string>();;

  public city: string;

  constructor() { }

  search() {
    // TO BE IMPLEMENTED
    this.citySearch.emit(this.city);
  }
}
