import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.activatedRoute.params.subscribe(param => {
      this.getArtistById(param.id);
      this.getTopTracks(param.id);
    });
  }

  ngOnInit() {
  }

  getArtistById(id: string) {
    this.loading = true;
    this.spotifyService.getArtist(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.loading = true;
    this.spotifyService.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
      this.loading = false;
    });
  }

}
