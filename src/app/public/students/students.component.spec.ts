import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddStudentsFormModule } from 'src/app/shared/components/forms/add-students-form/add-students-form.module';
import { TableGeneralModule } from 'src/app/shared/components/tables/table-general/table-general.module';

import { StudentsComponent } from './students.component';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsComponent ],
      imports: [
        TableGeneralModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        AddStudentsFormModule,
        MatDialogModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Open dialog`, () => {
    const fixture = TestBed.createComponent(StudentsComponent);
    const app = fixture.componentInstance;
    app.openForm();
    // expect(app.title).toEqual('web-cloud-services');
  });
});
