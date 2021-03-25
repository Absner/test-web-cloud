import { Component, OnInit } from '@angular/core';
import { IActionElementCard } from 'src/app/shared/cards/card-radio-checked/card-radio-checked.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardNavigatorSource: Array<IActionElementCard>;

  constructor() { }

  ngOnInit(): void {
    this.createObjects();
  }

  /**
   * createObjects
   */
  public createObjects(): void {
    this.cardNavigatorSource = [
      {
        id: 'pending_payment_count',
        title: 'Personajes',
        count: 0,
        routeActive: '/home/characters',
        idElement: 'collection',
        classControl: 'collection'
      },
      {
        id: 'pending_incomes_count',
        title: 'Estudiantes',
        count: 0,
        routeActive: '/home/students',
        idElement: 'processOfSale',
        classControl: 'processOfSale'
      },
      {
        id: 'paid_debtor_count',
        title: 'Profesores',
        count: 0,
        routeActive: '/home/teachers',
        idElement: 'invoicesCollected',
        classControl: 'invoicesCollected'
      }
    ];
  }

}
