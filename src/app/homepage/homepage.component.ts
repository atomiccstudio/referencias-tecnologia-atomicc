import { Component, OnInit } from '@angular/core';
import getArrays from '../datasource/references';
import { MatDialog } from '@angular/material/dialog';
import { FormContribuirDialogComponent } from  '../form-contribuir-dialog/form-contribuir-dialog.component'

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

  constructor(
    public dialog: MatDialog
  ) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(FormContribuirDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
