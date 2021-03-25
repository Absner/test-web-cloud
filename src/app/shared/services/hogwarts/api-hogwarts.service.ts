import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPerson } from '../../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiHogwartsService {

  constructor(private readonly http: HttpClient) { }

  /**
   * getCharactersByHouse
   */
  public getCharactersByHouse(house: string): Promise<any> {
    return this.http.get<Array<IPerson>>(`${environment.baseUrl}/house/${house}`).toPromise();
  }

  /**
   * getStudents
   */
  public getStudents(): Promise<any> {
    return this.http.get<Array<IPerson>>(`${environment.baseUrl}/students`).toPromise();
  }

  /**
   * getTeachers
   */
  public getTeachers(): Promise<Array<IPerson>> {
    return this.http.get<Array<IPerson>>(`${environment.baseUrl}/staff`).toPromise();
  }

}
