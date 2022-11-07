import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteViajeTomadoPageRoutingModule } from './cliente-viaje-tomado-routing.module';

import { ClienteViajeTomadoPage } from './cliente-viaje-tomado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteViajeTomadoPageRoutingModule
  ],
  declarations: [ClienteViajeTomadoPage]
})
export class ClienteViajeTomadoPageModule {}
