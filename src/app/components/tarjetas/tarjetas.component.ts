import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() items;

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  getArtist(item: any) {
    let artistId: string;

    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }

    this.route.navigate(['artist', artistId]);
  }

}
