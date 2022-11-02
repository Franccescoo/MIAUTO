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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
