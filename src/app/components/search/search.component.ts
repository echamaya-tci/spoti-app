import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  buscar(termino: string) {
    if (termino === '') {
      this.artistas = [];
      return;
    }
    this.loading = true;
    this.spotifyService.getArtists(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }

}
