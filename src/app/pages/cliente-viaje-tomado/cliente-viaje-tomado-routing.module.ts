import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteViajeTomadoPage } from './cliente-viaje-tomado.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteViajeTomadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteViajeTomadoPageRoutingModule {}
