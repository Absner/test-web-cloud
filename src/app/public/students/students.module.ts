import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableGeneralModule } from '../../shared/components/tables/table-general/table-general.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { AddStudentsFormModule } from '../../shared/components/forms/add-students-form/add-students-form.module';


@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    TableGeneralModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    AddStudentsFormModule,
    MatDialogModule
  ]
})
export class StudentsModule { }
