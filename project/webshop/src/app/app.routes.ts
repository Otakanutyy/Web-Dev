import { Routes } from '@angular/router';
import path from 'node:path';

//components
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClothDetailComponent } from './cloth-detail/cloth-detail.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Home Page' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent, data: { title: 'About us Page' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login Page' } },
    { path: 'signup', component: SignupComponent, data: { title: 'Home Page' } },
    { path: 'profile', component: ProfileComponent, data: { title: 'Home Page' } },
    { path: 'cart', component: CartComponent, data: { title: 'Home Page' } },
];


