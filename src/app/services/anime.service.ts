import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  searchAnimeByName(filters: any,query:any){
    return this.http.get(`https://api.jikan.moe/v4/anime?sfw&sort=desc&q=` + query + filters)
  }

  searchAnimeById(id: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + id)
  }

  searchAnimeByGenreId(genreid: number){
    return this.http.get("https://api.jikan.moe/v4/anime?sfw&genres=" + genreid)
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

  getAnimeTrailer(id: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + id + `/videos`)
  }

  getAnimeEpisodes(id: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + id + `/episodes`)
  }

  getAnimeEpisodeById(animeId: number,episodeId: number){
    return this.http.get(`https://api.jikan.moe/v4/anime/` + animeId + `/episodes/` + episodeId)
  }

  getTopAnimes(queries: any){
    return this.http.get(`https://api.jikan.moe/v4/top/anime?` + queries)
  }

}

