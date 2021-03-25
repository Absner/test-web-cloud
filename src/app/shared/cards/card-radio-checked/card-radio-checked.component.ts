import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export interface IActionElementCard {
  id: any;
  title: string;
  count: number;
  idElement: string;
  routeActive: string;
  iconName?: string;
  classControl?: string;
}

@Component({
  selector: 'app-card-radio-checked',
  host: { class: 'card-radio-checked' },
  templateUrl: './card-radio-checked.component.html',
  styleUrls: ['./card-radio-checked.component.scss']
})
export class CardRadioCheckedComponent implements OnInit, OnChanges {

  @Input() source: IActionElementCard;
  @Input() checked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.checked && change.checked.currentValue) {
      this.checked = change.checked.currentValue;
    }
  }

}
