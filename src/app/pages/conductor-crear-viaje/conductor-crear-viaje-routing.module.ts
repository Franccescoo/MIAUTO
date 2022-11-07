import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductorCrearViajePage } from './conductor-crear-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: ConductorCrearViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductorCrearViajePageRoutingModule {}
