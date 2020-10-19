import { Component, OnInit } from '@angular/core';
import getArrays from '../datasource/references';

export interface Rerencia {
  title: string;
  type: string;
  keywords: Array<string>;
  url: string;
}

const ELEMENT_DATA: Rerencia[] = getArrays['links'];

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  displayedColumns: string[] = ['title', 'type', 'keywords', 'url'];
  dataSource = ELEMENT_DATA;
  searchParams: string = '';

  constructor() { }

  ngOnInit() {
  }

  filterLinks() {
    if (this.searchParams && this.searchParams.length > 2) {
      this.dataSource = this.dataSource.filter(item => {
        if (item.title.includes(this.searchParams)  || item.type.includes(this.searchParams) || item.keywords.includes(this.searchParams) || item.url.includes(this.searchParams)) {
          return true;
        }
      });
    } else {
      this.dataSource = getArrays['links'];
    }
    
  }

}
