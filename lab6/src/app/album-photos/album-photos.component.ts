import { Component, OnInit } from '@angular/core';
import { big } from '../models';
import { ActivatedRoute, Router } from '@angular/router';

//services
import { AlbumsService } from '../services/albums.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
[x: string]: any;
  big: big[] = [];

  link: string = "https://jsonplaceholder.typicode.com/albums/";

  constructor(private albumsService: AlbumsService,
              private route: ActivatedRoute,
              private router: Router ){
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('albumId'));
    
    this.albumsService.fetchAlbumPhotos(this.link+albumIdFromRoute+"/photos").subscribe(albums => {
      this.big = albums;
    });
  }

  return(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }  
}
