import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IActionElementCard } from '../../shared/components/cards/card-radio-checked/card-radio-checked.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardNavigatorSource: Array<IActionElementCard>;

  constructor(public readonly router: Router,) { }

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
        classControl: 'collection',
        iconName: 'icon-cloud i-house'
      },
      {
        id: 'pending_incomes_count',
        title: 'Estudiantes',
        count: 0,
        routeActive: '/home/students',
        idElement: 'processOfSale',
        classControl: 'processOfSale',
        iconName: 'icon-cloud i-students'
      },
      {
        id: 'paid_debtor_count',
        title: 'Profesores',
        count: 0,
        routeActive: '/home/teachers',
        idElement: 'invoicesCollected',
        classControl: 'invoicesCollected',
        iconName: 'icon-cloud i-teachers'
      }
    ];
  }

  /**
   * isActiveRoute
   */
  public isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

}
