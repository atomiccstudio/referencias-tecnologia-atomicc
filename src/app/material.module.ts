import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  exports: [
    MatTableModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class MaterialModule {}