import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentsFormComponent } from 'src/app/shared/components/forms/add-students-form/add-students-form.component';
import { IPerson } from 'src/app/shared/models/person.model';
import { ApiHogwartsService } from 'src/app/shared/services/hogwarts/api-hogwarts.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public sourceDataTable: Array<IPerson>;

  constructor(
    private readonly apiHogwartsService: ApiHogwartsService,
    private readonly dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  /**
   * openForm
   */
  public openForm(): void {
    const dialogAddStudents = this.dialog.open(AddStudentsFormComponent, {
      width: '30%'
    });

    dialogAddStudents.beforeClosed().subscribe((response: FormGroup) => {
      if (response) {
        const data: any = response.value;
        this.sourceDataTable.push(data);
        this.sourceDataTable = [...this.sourceDataTable];
        localStorage.setItem('students', JSON.stringify(this.sourceDataTable));
      }
    });
  }

  /**
   * getStudents
   */
  public getStudents(): void {
    if (!localStorage.getItem('students')) {
      this.apiHogwartsService.getStudents().then((response: Array<IPerson>) => {
        localStorage.setItem('students', JSON.stringify(response));
        this.sourceDataTable = response;
      }).catch((error: any) => {
        console.log('error', error);
      });
    } else {
      this.sourceDataTable = JSON.parse(localStorage.getItem('students'));
    }
  }

}
