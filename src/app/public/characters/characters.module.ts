import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { TableGeneralModule } from '../../shared/components/tables/table-general/table-general.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    TableGeneralModule,
    FlexLayoutModule
  ]
})
export class CharactersModule { }
