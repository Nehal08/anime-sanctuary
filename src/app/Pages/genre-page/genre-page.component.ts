import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent implements OnInit {

  genreid!: number;
  genre!: any;
  animes!: any;

  constructor(private AnimeService: AnimeService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let id = params['genreid']
      this.genreid = <number>id;
    });

    this.genre = this.route.snapshot.paramMap.get('name')

    this.AnimeService.searchAnimeByGenreId(this.genreid).subscribe(data => {
      let obj:any = data
      this.animes = obj.data
    },error => {
      this.router.navigate(['**'])
    })

  }

}
