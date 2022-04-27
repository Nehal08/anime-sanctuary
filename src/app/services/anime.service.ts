import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  searchAnimeByName(name: string){
    return this.http.get(`https://api.jikan.moe/v4/anime?sfw&q=` + name)
  }

  searchAnimeById(id: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + id)
  }

  searchAnimeByGenreId(genreid: number){
    return this.http.get("https://api.jikan.moe/v4/anime?sfw&genres=" + genreid)
  }

  filterAnime(filters: any,query:any){
    return this.http.get(`https://api.jikan.moe/v4/anime?sfw&sort=desc&q=` + query + filters)
  }

  getAnimeCharacters(id: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + id + `/characters`)
  }

  getAnimeThemes(id: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + id + `/themes`)
  }

  getRelatedAnimed(id: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + id + `/relations`)
  }

  getAnimeRecommendations(id: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + id + `/recommendations`)
  }

  getAnimeVideos(id: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + id + `/videos`)
  }

}

