import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  isCollapsed: boolean = true;
  id: any;
  episodes: any;
  up:boolean[]=[]

  constructor(private animeService: AnimeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')

    this.animeService.getAnimeEpisodes(this.id).subscribe(data => {
      let obj: any = data
      this.episodes = obj.data
      console.log(this.episodes)
      let len = this.episodes.length     
      this.up = new Array(len).fill(true);
    })
  }

}
