import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowAvatarModule } from '../../show-avatar/show-avatar.module';

import { TableGeneralComponent } from './table-general.component';

describe('TableGeneralComponent', () => {
  let component: TableGeneralComponent;
  let fixture: ComponentFixture<TableGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGeneralComponent ],
      imports: [
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatPaginatorModule,
        ShowAvatarModule,
        MatDialogModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
