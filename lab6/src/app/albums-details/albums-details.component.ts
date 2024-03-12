import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Albums } from '../models';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlbumsService } from '../services/albums.service';

//components
import { AlbumsComponent } from '../albums/albums.component';


@Component({
  selector: 'app-albums-details',
  standalone: true,
  imports: [NgIf, AlbumsComponent, RouterModule],
  templateUrl: './albums-details.component.html',
  styleUrl: './albums-details.component.css'
})
export class AlbumsDetailsComponent implements OnInit{

  albumItem : Albums | undefined;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService,
    private router: Router){
  }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('albumId'));
    
    this.albumItem = this.albumsService.getStoredAlbums().find(album => album.id === albumIdFromRoute); 
  }
  
  changeTitle(albumItem: Albums) {
    let newTitle = prompt('Enter new Title', '');
    if(!newTitle){
      alert('provide title!');
    }
    else{
      if (this.albumItem) {
        this.albumItem.title = newTitle;
      }
    }
  }

  return(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
