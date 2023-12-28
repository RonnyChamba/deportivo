import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramacionComponent } from './models/web/programacion/programacion.component';

const routes: Routes = [
  { path: "", component: ProgramacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
