import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';

import { ModificarConductorPage } from './modificar-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,MatIconModule],
})
export class ModificarConductorPageRoutingModule {}
