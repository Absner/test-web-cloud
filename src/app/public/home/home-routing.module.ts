import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'characters',
        loadChildren: () => import('../characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: 'students',
        loadChildren: () => import('../students/students.module').then(m => m.StudentsModule)
      },
      {
        path: 'teachers',
        loadChildren: () => import('../teachers/teachers.module').then(m => m.TeachersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
