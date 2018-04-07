import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private data: SearchService) { }

  ngOnInit() {
  }

  searchOnChange(val) {
    this.data.changeMessage(val);
  }

}
