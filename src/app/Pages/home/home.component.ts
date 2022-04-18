import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchQuery!: any;
  animeList!: any;

  constructor(private AnimeService: AnimeService) { }

  ngOnInit(): void {
  }

  handleSearch(){

    this.AnimeService.searchAnimeByName(this.searchQuery).subscribe(data => {
      console.log(data)
      let obj:any = data;
      this.animeList = obj.data;
    })
    
  }

}
