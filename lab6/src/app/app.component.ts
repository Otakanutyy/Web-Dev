import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumsService } from './services/albums.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'lab6';

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.storeLocally();
  }
}
