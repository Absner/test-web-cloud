import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/shared/models/person.model';
import { ApiHogwartsService } from 'src/app/shared/services/hogwarts/api-hogwarts.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public sourceDataTable: Array<IPerson>;

  constructor(private readonly apiHogwartsService: ApiHogwartsService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  /**
   * getStudents
   */
  public getStudents(): void {
    this.apiHogwartsService.getStudents().then((response: Array<IPerson>)  =>  {
      console.log('students', response);
      this.sourceDataTable = response;
    }).catch((error: any) =>  {
      console.log('error', error);
    });
  }

}
