import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TableGeneralComponent } from './table-general.component';



@NgModule({
  declarations: [TableGeneralComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule
  ],
  exports: [TableGeneralComponent]
})
export class TableGeneralModule { }
