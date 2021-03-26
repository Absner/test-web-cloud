import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-students-form',
  templateUrl: './add-students-form.component.html',
  styleUrls: ['./add-students-form.component.scss']
})
export class AddStudentsFormComponent implements OnInit {

  public form: FormGroup;

  @Output() save = new EventEmitter<FormGroup>();

  constructor(
    private readonly fb: FormBuilder,
    public ConfirmDialogRef: MatDialogRef<AddStudentsFormComponent>,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * onSubmit
   */
  public onSubmit(): void {
    this.save.emit(this.form);
    this.ConfirmDialogRef.close(this.form);
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: new FormControl(null, Validators.compose([Validators.required])),
      patronus: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      image: new FormControl(null)
    });
  }

}
