import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router: Router,
              private activeRoute: ActivatedRoute){
  }
  return(){
    this.router.navigate(['../'], {relativeTo: this.activeRoute});
  }
}
