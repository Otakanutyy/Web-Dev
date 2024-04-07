import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { RouterOutlet } from '@angular/router';
import { ClothesListComponent } from '../clothes-list/clothes-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, ClothesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
