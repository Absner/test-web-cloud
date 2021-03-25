import { Component, OnInit } from '@angular/core';
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

  constructor(private readonly apiHogwartsService: ApiHogwartsService) { }

  ngOnInit(): void {
    console.log('personajes');
    this.getCharacters();
  }

  private getCharacters(): void {
    this.apiHogwartsService.getCharactersByHouse('slytherin').then((response: Array<IPerson>)  =>  {
      this.sourceDataTable = response;
    }).catch((error: any) =>  {
      console.log('error', error);
    });
  }

}
