import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-top-animes',
  templateUrl: './top-animes.component.html',
  styleUrls: ['./top-animes.component.css']
})
export class TopAnimesComponent implements OnInit {

  filters!: FormGroup;
  animes: any[] = [];
  queries = '';
  filtering: boolean = false;

  constructor(private animeService: AnimeService, private router: Router) { }

  ngOnInit(): void {

    this.animeService.getTopAnimes(this.queries).subscribe({
      next: (obj) => this.handleData(obj),
      error: (er) =>  this.router.navigate(['**'])
    })

    this.filters = new FormGroup({
      type: new FormControl(''),
      filter: new FormControl('')
    });

    this.filters.valueChanges.subscribe(data => {

      this.filtering = true
      this.queries = 'type=' + data.type + '&filter=' + data.filter 

      this.animeService.getTopAnimes(this.queries).subscribe({
        next: (obj) => this.handleData(obj),
        error: (er) =>  this.router.navigate(['**'])
      })

    })

  }

  handleData(obj: any){

    let temp = obj.data

    this.animes = []

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
            "synop":  this.synopHandling(el.synopsis),
            "showMore": false
          }
        }) 
    });
  }

  synopHandling(synop: string){
    if(synop == null)
      return null
    return synop.split('[')[0]
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

  removeFilter(){

    this.filtering = false;
    this.filters.reset()
    this.queries = ''
    this.animeService.getTopAnimes(this.queries).subscribe({
      next: (obj) => this.handleData(obj),
      error: (er) =>  this.router.navigate(['**'])
    })

  }

}