import { Component, OnInit } from '@angular/core';
import { FilterButton, Filter } from 'src/app/modules/filtering.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  filterButtons: FilterButton[] = [
    { type: Filter.All, label: 'All', isActice: true },
    { type: Filter.Actice, label: 'Active', isActice: false },
    { type: Filter.Completed, label: 'Completed', isActice: false }
  ];

  length = 0;

  constructor() { }

  ngOnInit() {
  }

}
