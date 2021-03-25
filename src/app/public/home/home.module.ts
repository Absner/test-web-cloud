import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardRadioCheckedModule } from 'src/app/shared/cards/card-radio-checked/card-radio-checked.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardRadioCheckedModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
