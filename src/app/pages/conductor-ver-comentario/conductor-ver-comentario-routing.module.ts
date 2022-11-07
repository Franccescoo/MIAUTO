import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductorVerComentarioPage } from './conductor-ver-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: ConductorVerComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductorVerComentarioPageRoutingModule {}
