import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home"},
    { path: "home", component: HomeComponent },
    { path: "new-user", component: FormUserComponent},
    { path: "user-details/:idUsuario", component: UserDetailsComponent},
    { path: "update-user/:id", component: FormUserComponent},
    { path: "error", component: PaginaErrorComponent},
    { path: '**', redirectTo: '/error'}
    
];
