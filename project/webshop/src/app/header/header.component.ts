import { Component } from '@angular/core';

import { CartComponent } from '../cart/cart.component';
import { CategoriesComponent } from '../categories/categories.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { AboutComponent } from '../about/about.component';

import { RouterOutlet, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, CategoriesComponent, SignupComponent, 
    LoginComponent, RouterOutlet, RouterModule, AboutComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
