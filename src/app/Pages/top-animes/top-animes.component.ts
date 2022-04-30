import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-top-animes',
  templateUrl: './top-animes.component.html',
  styleUrls: ['./top-animes.component.css']
})
export class TopAnimesComponent implements OnInit {

  animes: any[] = [];

  constructor(private animeService: AnimeService, private router: Router) { }

  ngOnInit(): void {
    this.animeService.getTopAnimes().subscribe(data => {
      let obj: any = data;
      let temp = obj.data

      temp.forEach((el: { images: { webp: { image_url: any; }; }; mal_id: any; title: any; status: any; rank: any; trailer: { url: any; }; type: any; year: any; rating: any; episodes: any; synopsis: string; }) => { 
        this.animes.push({
          "image": el.images.webp.image_url,
          "mal_id": el.mal_id, 
          "title": el.title, 
          "status": el.status, 
          "rank": el.rank, 
          "trailer": el.trailer.url,
          "type": el.type,
          "year": el.year,
          "rating": el.rating,
          "episodes": el.episodes,
          "synopsis": {
            "synop":  el.synopsis.split('[')[0],
            "showMore": false
          }
         }) 
      });
    })
  }

  trimString(text: string, length: number) {
    return text.length > length ? text.substring(0, length) + '...' : text;
  }

  navigate(id: number){
    this.router.navigate(['anime',id])
  }

  watchTrailer(link: any){
    window.open(link, "_blank");
  }

}