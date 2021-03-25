import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRadioCheckedComponent } from './card-radio-checked.component';

describe('CardRadioCheckedComponent', () => {
  let component: CardRadioCheckedComponent;
  let fixture: ComponentFixture<CardRadioCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRadioCheckedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRadioCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
