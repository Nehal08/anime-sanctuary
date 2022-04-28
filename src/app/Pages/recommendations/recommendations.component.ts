import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  id: any;
  recommendations: any[] = [];

  constructor(private route: ActivatedRoute,private animeService: AnimeService,private router: Router) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
    })

    this.showRecommendatios();
  }

  showRecommendatios(){
    this.animeService.getAnimeRecommendations(this.id).subscribe(data => {
      let obj: any = data;
      let allRecoms = obj['data'].slice(0,25)

      allRecoms.forEach((data: { entry: { title: any; images: { webp: { image_url: any; }; }; mal_id: any; }; }) => this.recommendations.push({"title" : data.entry.title,"images": { "webp": { "image_url": data.entry.images.webp.image_url}},"mal_id": data.entry.mal_id}));
    },error => {
      this.router.navigate(['**'])
    })
  }

}
