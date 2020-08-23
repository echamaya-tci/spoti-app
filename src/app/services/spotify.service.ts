import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  private client_id = 'a7338e2884ab457b835e82d08fa51308';
  private client_secret = '40e1a6429cac4900bed5e9a325aa4d38';
  private access_token = 'BQBOH8t0ImU_MYkOHuMX-r04BN2N1ySbgjJ07N3dJAfnVTrOSnkK77d_4vEw8bMLF5dRcY1k0H5O1nRpLl4';

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.access_token
    });
    return this.http.get(url, {headers});
  }

  tokenGenerate() {
    return this.http.get(`https://spotify-get-token.herokuapp.com/spotify/${this.client_id}/${this.client_secret}`);
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
      .pipe(map((data: any) => data.tracks));
  }

}
