import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    { path:'', component: HomeComponent },
    { path:'cadastro', component: RegisterComponent}
]