import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IPerson } from 'src/app/shared/models/person.model';
import { ApiHogwartsService } from 'src/app/shared/services/hogwarts/api-hogwarts.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [ApiHogwartsService]
})
export class CharactersComponent implements OnInit {

  public sourceDataTable: Array<IPerson>;
  public house: Array<string> = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'];
  public controlSelect: FormControl = new FormControl('gryffindor');

  constructor(private readonly apiHogwartsService: ApiHogwartsService) { }

  ngOnInit(): void {
    console.log('personajes');
    this.getCharacters('gryffindor');
    this.controlSelect.valueChanges.subscribe((value: string) =>  {
      this.getCharacters(value);
    })
  }

  public getCharacters(house: string): void {
    this.apiHogwartsService.getCharactersByHouse(house).then((response: Array<IPerson>)  =>  {
      this.sourceDataTable = response;
    }).catch((error: any) =>  {
      console.log('error', error);
    });
  }

}
