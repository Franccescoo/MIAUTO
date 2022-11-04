import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
//import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Storage, SQLite, Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}

// SQLite, Camera, Geolocation,Storage

//ESTOS SON IMPORTS DE LO QUE TENIAMOS ANTES, POR SI HAY QUE IMPORTAR ALGO DE NUEVO AQUI ESTA***