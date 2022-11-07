import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorVerComentarioPageRoutingModule } from './conductor-ver-comentario-routing.module';

import { ConductorVerComentarioPage } from './conductor-ver-comentario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorVerComentarioPageRoutingModule
  ],
  declarations: [ConductorVerComentarioPage]
})
export class ConductorVerComentarioPageModule {}
