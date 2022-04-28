import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { switchMap } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-profile',
  templateUrl: './anime-profile.component.html',
  styleUrls: ['./anime-profile.component.css']
})
export class AnimeProfileComponent implements OnInit {

  //Collapse Variables
  isCollapsedBackground: boolean = true;
  isCollapsedThemes: boolean = true;

  //Animes variables
  anime!: any;
  id!: any;
  score: any = null;
  title_english!: any;
  title_japanese!: any;
  synopsis: any = null;
  genres: any[] = [];
  status: any = null;
  episodes: any = null;
  duration: any = null;
  type: any = null
  rating: any = null;
  year: any = null;
  demographics: any[] = [];
  themes: any[] = [];
  rank: any = null;
  source: any = null;
  background: any = null;

  //Character Variables
  characters: any[] = []; 
  chars: any;

  customOptions: OwlOptions = {
    pullDrag: true, dots: false, slideBy: 'page', rewind: true, nav: true,
    responsive: {
      0:{
        items:1,
        nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
    }
  }

  //Themes Variable
  ost: any = null; 

  //promo variables
  link: any = null;
  len: any = null;

  constructor(private route: ActivatedRoute,private animeService: AnimeService,private router: Router) {  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params['id'];

    });

    // this.route.params.pipe(switchMap((params) => this.animeService.searchAnimeById(params['id']))).subscribe(data => {})

    this.getAnimeDetails()
    this.getCharacterDetails()

  }

  getAnimeDetails(){
    this.animeService.searchAnimeById(this.id).subscribe(data => {
      let obj:any = data
      this.anime = obj.data
      // console.log(this.anime)

      this.status = this.anime.status
      this.episodes = this.anime.episodes
      this.year = this.anime.year
      this.rank = this.anime.rank
      this.source = this.anime.source
      this.background = this.anime.background

      if(this.anime.score != null)
        this.score = this.anime.score/2;

      if(this.anime.type != 'Unknown')
        this.type = this.anime.type 
      
      if(this.anime.title_english != null)
        this.title_english =  this.anime.title_english
      else
        this.title_english = null

      if(this.anime.title_japanese != null)
        this.title_japanese =  this.anime.title_japanese
      else
        this.title_japanese = null

      if(this.anime.synopsis != null)
        this.synopsis= this.anime.synopsis.split('[')[0]

      if(this.anime.rating != 'None')
        this.rating = this.anime.rating

      if(this.anime.genres!= null)
        this.anime.genres.forEach((data: { name: any; mal_id: any}) => this.genres.push({"name" : data.name,"genreid": data.mal_id}));

      if (this.anime.duration != null && this.anime.duration!= 'Unknown'){
        if(this.anime.type === "Movie" )
          this.duration = this.anime.duration
        else{
          let temp = this.anime.duration.split(' ')
          if(temp.length > 1)
            this.duration = temp[0] + ' ' + temp[1] + '.'
          else
            this.duration = temp[0]
        }
      }

      if(this.anime.demographics.length > 0)
        this.anime.demographics.forEach((data: { name: any; }) => this.demographics.push(data.name));

      if(this.anime.themes.length > 0)
        this.anime.themes.forEach((data: {name: any}) => this.themes.push(data.name));

    },error => {
      this.router.navigate(['**'])
    })
  }

  getCharacterDetails(){
    this.animeService.getAnimeCharacters(this.id).subscribe(data => {

      let obj: any = data
      let allCharacters = obj['data']
  
      allCharacters.forEach((data: { character: { name: any; images: { webp: { image_url: any; }; }; }; role: any; }) => this.characters.push({"name" : data.character.name,"image_url": data.character.images.webp.image_url,"role": data.role}));

      if(this.characters.length >= 20)
        this.chars = this.characters.slice(0,20)
      else
        this.chars = this.characters
      
    })
  }

  getAnimeThemes(){
    this.animeService.getAnimeThemes(this.id).subscribe(data => {
      let obj: any = data
      this.ost = obj['data']
    })
  }

  getAnimeRelations(){
    this.router.navigate(['related',this.id])
  }

  getRecommendations(){
    this.router.navigate(['recommendations',this.id])
  }

  watchVideos(){
    this.animeService.getAnimeTrailer(this.id).subscribe(data => {
      let obj: any = data
      let vids = obj['data']
      console.log(vids);
      this.len = Object.keys(vids['promo']).length
      if(this.len!=0){
        this.link = vids['promo'][this.len-1]['trailer']['url']
        window.open(this.link, "_blank");
      }
    })
  }

  goToEpisodes(){
    this.router.navigate(['episodes',{id: this.id}])
  }

}
