import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormUserComponent } from './components/form-user/form-user.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home"},
    { path: "home", component: HomeComponent },
    { path: "new-user", component: FormUserComponent}

];
