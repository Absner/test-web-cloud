import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadImageModule } from '../../upload-image/upload-image.module';

import { AddStudentsFormComponent } from './add-students-form.component';

describe('AddStudentsFormComponent', () => {
  let component: AddStudentsFormComponent;
  let fixture: ComponentFixture<AddStudentsFormComponent>;
  const dialogMock = {
    close: () => { }
};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentsFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule,
        UploadImageModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AddStudentsFormComponent);
    const app = fixture.componentInstance;
    
    expect(component).toBeTruthy();
  });

  it(`Save data form`, () => {
    const fixture = TestBed.createComponent(AddStudentsFormComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    app.onSubmit();
    // expect(component.ConfirmDialogRef.close).toHaveBeenCalled();
    spyOn(component.ConfirmDialogRef, 'close');

    // expect(app.title).toEqual('web-cloud-services');
  });
});
