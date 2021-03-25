import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAvatarComponent } from './show-avatar.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ShowAvatarComponent],
  imports: [
    CommonModule
  ],
  exports: [ShowAvatarComponent],
  entryComponents: [ShowAvatarComponent]
})
export class ShowAvatarModule { }
