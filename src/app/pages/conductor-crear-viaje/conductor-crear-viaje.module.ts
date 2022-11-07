import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorCrearViajePageRoutingModule } from './conductor-crear-viaje-routing.module';

import { ConductorCrearViajePage } from './conductor-crear-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorCrearViajePageRoutingModule
  ],
  declarations: [ConductorCrearViajePage]
})
export class ConductorCrearViajePageModule {}
