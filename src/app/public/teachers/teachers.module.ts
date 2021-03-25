import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableGeneralModule } from 'src/app/shared/components/tables/table-general/table-general.module';


@NgModule({
  declarations: [TeachersComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TableGeneralModule,
    FlexLayoutModule
  ]
})
export class TeachersModule { }
