import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductorModificarViajePage } from './conductor-modificar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: ConductorModificarViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductorModificarViajePageRoutingModule {}
