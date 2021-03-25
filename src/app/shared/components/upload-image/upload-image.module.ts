import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DndFileDirective } from './directive/dnd-file.directive';



@NgModule({
  declarations: [UploadImageComponent, DndFileDirective],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [UploadImageComponent]
})
export class UploadImageModule { }
