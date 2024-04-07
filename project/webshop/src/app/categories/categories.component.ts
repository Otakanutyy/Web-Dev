import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from '../../../category';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories = [...categories]; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.navigateByUrl('/category/');
  }

  selectedCategory(event: any){
    this.router.navigateByUrl('/category/' + event.target.value);
  }
}
