import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductorEliminarViajePage } from './conductor-eliminar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: ConductorEliminarViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductorEliminarViajePageRoutingModule {}
