import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';

export const routes: Routes = [
  //Ruta principal, siempre que carge la app nos redirige a la home
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'new-user', component: FormUserComponent },
  { path: 'user-details/:idUsuario', component: UserDetailsComponent },
  { path: 'update-user/:id', component: FormUserComponent },
  { path: 'error', component: PaginaErrorComponent },
  //Ruta que redirige a una ruta no encontrada, llamamos al error (mensaje de error) que hemos creado como componente
  { path: '**', redirectTo: '/error' },
];
