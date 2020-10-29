import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog' 

@Component({
  selector: 'app-form-contribuir-dialog',
  templateUrl: './form-contribuir-dialog.component.html',
  styleUrls: ['./form-contribuir-dialog.component.css']
})
export class FormContribuirDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormContribuirDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
