import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  exports: [
    MatTableModule,
    MatInputModule
  ]
})
export class MaterialModule {}