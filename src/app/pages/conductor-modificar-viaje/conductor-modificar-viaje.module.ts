import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorModificarViajePageRoutingModule } from './conductor-modificar-viaje-routing.module';

import { ConductorModificarViajePage } from './conductor-modificar-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorModificarViajePageRoutingModule
  ],
  declarations: [ConductorModificarViajePage]
})
export class ConductorModificarViajePageModule {}
