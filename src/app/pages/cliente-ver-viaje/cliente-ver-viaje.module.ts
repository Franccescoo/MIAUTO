import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteVerViajePageRoutingModule } from './cliente-ver-viaje-routing.module';

import { ClienteVerViajePage } from './cliente-ver-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteVerViajePageRoutingModule
  ],
  declarations: [ClienteVerViajePage]
})
export class ClienteVerViajePageModule {}
