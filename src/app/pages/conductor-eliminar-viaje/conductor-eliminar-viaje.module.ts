import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorEliminarViajePageRoutingModule } from './conductor-eliminar-viaje-routing.module';

import { ConductorEliminarViajePage } from './conductor-eliminar-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorEliminarViajePageRoutingModule
  ],
  declarations: [ConductorEliminarViajePage]
})
export class ConductorEliminarViajePageModule {}
