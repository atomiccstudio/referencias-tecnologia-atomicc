import { Component, OnInit } from '@angular/core';
import getArrays from '../datasource/referencias';

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
  referencias = getArrays['links'];

  constructor() { }

  ngOnInit() {
    console.log('LADY', this.dataSource, ELEMENT_DATA);
  }

}
