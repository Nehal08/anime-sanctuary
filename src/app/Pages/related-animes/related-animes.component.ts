import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-related-animes',
  templateUrl: './related-animes.component.html',
  styleUrls: ['./related-animes.component.css']
})
export class RelatedAnimesComponent implements OnInit {

  id: any;
  relations: any[] = [];

  constructor(private route: ActivatedRoute,private animeService: AnimeService,private router: Router) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getRelatedAnimes();
    });
  }

  getRelatedAnimes(){
    this.animeService.getRelatedAnimed(this.id).subscribe(data => {
      let obj: any = data;
      this.relations = obj['data']
    },error => {
      this.router.navigate(['**'])
    })
  }

  goToAnime(id: number,type: string){
    if(type != 'manga')
      this.router.navigate(['anime',id])
  }


}
