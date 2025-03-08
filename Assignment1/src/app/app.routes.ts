import { Routes } from '@angular/router';
import { HomeComponent } from './navComponents/home/home.component';
import { AboutComponent } from './navComponents/about/about.component';
import { ContactComponent } from './navComponents/contact/contact.component';
import { LoginComponent } from './navComponents/login/login.component';
import { RegisterComponent } from './navComponents/register/register.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        redirectTo: '/login',
    }
];