import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Albums, big } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  storedAlbum: Albums[] = [];

  constructor(private http: HttpClient) {}

  fetchAlbums(): Observable<Albums[]> {
    const albumLink = "https://jsonplaceholder.typicode.com/albums";
    return this.http.get<Albums[]>(albumLink);
  }

  fetchAlbumPhotos(link: string): Observable<big[]>{
    return this.http.get<big[]>(link);
  }

  storeLocally(){
    this.fetchAlbums().subscribe(albums => {
      this.storedAlbum = albums;
    });
  }

  getStoredAlbums(): Albums[] {
    return this.storedAlbum;
  }
}
