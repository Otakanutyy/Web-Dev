import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//services
import { AlbumsService } from '../services/albums.service';

//interfaces
import { Albums } from '../models';
import { NgFor, NgIf } from '@angular/common';
import { AlbumsDetailsComponent } from "../albums-details/albums-details.component";

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-albums',
    standalone: true,
    templateUrl: './albums.component.html',
    styleUrl: './albums.component.css',
    imports: [RouterModule, HttpClientModule, NgIf, NgFor, AlbumsDetailsComponent, FormsModule]
})


export class AlbumsComponent implements OnInit{
  albums: Albums[] = [];
  newAlbumTitle: string| undefined;

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private albumService: AlbumsService){
  }


  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.albums = this.albumService.getStoredAlbums();
  }

  delete(album: Albums) {
    const index = this.albumService.getStoredAlbums().indexOf(album);

    if (index !== -1) {
      this.albumService.getStoredAlbums().splice(index, 1);
      this.refresh();
    }
  }

  addAlbum(){
    if(this.newAlbumTitle){
      const newAlbum: Albums = {
        id: this.albumService.getStoredAlbums().length+1,  // You need to implement a method to generate unique IDs
        title: this.newAlbumTitle,
        userId: 1  // Replace with the appropriate user ID
      };

      this.albumService.getStoredAlbums().push(newAlbum);
    }

    //clearing input field
    this.newAlbumTitle = '';
  }

  return(){
    this.router.navigate(['../'], {relativeTo: this.activeRoute});
  }
}
