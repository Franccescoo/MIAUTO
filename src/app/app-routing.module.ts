import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio-cliente',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio-cliente',
    loadChildren: () => import('./pages/inicio-cliente/inicio-cliente.module').then( m => m.InicioClientePageModule)
  },
  {
    path: 'inicio-conductor',
    loadChildren: () => import('./pages/inicio-conductor/inicio-conductor.module').then( m => m.InicioConductorPageModule)
  },
  {
    path: 'mapa-cliente',
    loadChildren: () => import('./pages/mapa-cliente/mapa-cliente.module').then( m => m.MapaClientePageModule)
  },
  {
    path: 'mapa-conductor',
    loadChildren: () => import('./pages/mapa-conductor/mapa-conductor.module').then( m => m.MapaConductorPageModule)
  },
  {
    path: 'perfil-cliente',
    loadChildren: () => import('./pages/perfil-cliente/perfil-cliente.module').then( m => m.PerfilClientePageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./pages/perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: 'modificar-cliente',
    loadChildren: () => import('./pages/modificar-cliente/modificar-cliente.module').then( m => m.ModificarClientePageModule)
  },
  {
    path: 'modificar-conductor',
    loadChildren: () => import('./pages/modificar-conductor/modificar-conductor.module').then( m => m.ModificarConductorPageModule)
  },
  {
    path: 'cliente-ver-viaje',
    loadChildren: () => import('./pages/cliente-ver-viaje/cliente-ver-viaje.module').then( m => m.ClienteVerViajePageModule)
  },
  {
    path: 'cliente-viaje-tomado',
    loadChildren: () => import('./pages/cliente-viaje-tomado/cliente-viaje-tomado.module').then( m => m.ClienteViajeTomadoPageModule)
  },
  {
    path: 'conductor-crear-viaje',
    loadChildren: () => import('./pages/conductor-crear-viaje/conductor-crear-viaje.module').then( m => m.ConductorCrearViajePageModule)
  },
  {
    path: 'conductor-modificar-viaje',
    loadChildren: () => import('./pages/conductor-modificar-viaje/conductor-modificar-viaje.module').then( m => m.ConductorModificarViajePageModule)
  },
  {
    path: 'conductor-eliminar-viaje',
    loadChildren: () => import('./pages/conductor-eliminar-viaje/conductor-eliminar-viaje.module').then( m => m.ConductorEliminarViajePageModule)
  },
  {
    path: 'conductor-ver-comentario',
    loadChildren: () => import('./pages/conductor-ver-comentario/conductor-ver-comentario.module').then( m => m.ConductorVerComentarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
