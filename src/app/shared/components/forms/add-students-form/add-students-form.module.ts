import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentsFormComponent } from './add-students-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadImageModule } from '../../upload-image/upload-image.module';



@NgModule({
  declarations: [AddStudentsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    UploadImageModule
  ],
  exports: [AddStudentsFormComponent],
  entryComponents: [AddStudentsFormComponent]
})
export class AddStudentsFormModule { }
