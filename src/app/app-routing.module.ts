import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeProfileComponent } from './Pages/anime-profile/anime-profile.component';
import { GenrePageComponent } from './Pages/genre-page/genre-page.component';
import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { RecommendationsComponent } from './Pages/recommendations/recommendations.component';
import { RelatedAnimesComponent } from './Pages/related-animes/related-animes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'anime/:id',
    component: AnimeProfileComponent,
  },
  {
    path: 'genre/:genreid',
    component: GenrePageComponent
  },
  {
    path: 'related/:id',
    component: RelatedAnimesComponent
  },
  {
    path: 'recommendations/:id',
    component: RecommendationsComponent
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

