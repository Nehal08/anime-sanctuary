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

}

