import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/shared/models/person.model';
import { ApiHogwartsService } from 'src/app/shared/services/hogwarts/api-hogwarts.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  public sourceDataTable: Array<IPerson>;

  constructor(private readonly apiHogwartsService: ApiHogwartsService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  /**
   * getTeachers
   */
  public getTeachers(): void {
    this.apiHogwartsService.getTeachers().then((response: Array<IPerson>) =>  {
      console.log('response', response);
      this.sourceDataTable = response;
    }).catch((error: any) =>  {
      console.log('error', error);
    });
  }

}
