import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Home Page' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent, data: { title: 'About Website' } },
    {
        path: 'albums', component: AlbumsComponent, data: { title: 'Albums Page' },
        children: [
            { path: ':albumId', component: AlbumsDetailsComponent, data: { title: 'Album Detail Page' } },
            { path: ':albumId/photos', component: AlbumPhotosComponent, data: { title: 'Album Photos Page' } }
        ]
    }
];

//{path: 'albums/:albumId', component: AlbumsDetailsComponent, title: 'Detail Page'},
    // {path: 'albums/:albumId/photos', component: AlbumPhotosComponent, title: 'Detail Page'}