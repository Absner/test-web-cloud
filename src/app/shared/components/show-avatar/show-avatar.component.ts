import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-avatar',
  templateUrl: './show-avatar.component.html',
  styleUrls: ['./show-avatar.component.scss']
})
export class ShowAvatarComponent implements OnInit {

  constructor(
    public ConfirmDialogRef: MatDialogRef<ShowAvatarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
