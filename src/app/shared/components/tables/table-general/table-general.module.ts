import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TableGeneralComponent } from './table-general.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShowAvatarModule } from '../../show-avatar/show-avatar.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [TableGeneralComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    ShowAvatarModule,
    MatDialogModule
  ],
  exports: [TableGeneralComponent]
})
export class TableGeneralModule { }
