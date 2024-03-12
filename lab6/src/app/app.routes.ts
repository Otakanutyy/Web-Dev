import { Routes } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home Page'},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path: 'about', component: AboutComponent, title: 'About Website'},
    {path: 'albums', component: AlbumsComponent, title: 'Albums Page'},
    {path: 'albums/:albumId', component: AlbumsDetailsComponent, title: 'Detail Page'},
    {path: 'albums/:albumId/photos', component: AlbumPhotosComponent, title: 'Detail Page'}
];
