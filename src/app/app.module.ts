import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AnimeProfileComponent } from './Pages/anime-profile/anime-profile.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { GenreTagComponent } from './components/genre-tag/genre-tag.component';
import { GenrePageComponent } from './Pages/genre-page/genre-page.component';
import { ThemePipe } from './Pipes/theme.pipe';
import { RelatedAnimesComponent } from './Pages/related-animes/related-animes.component';
import { RecommendationsComponent } from './Pages/recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    NavBarComponent,
    AnimeProfileComponent,
    PageNotFoundComponent,
    GenreTagComponent,
    GenrePageComponent,
    ThemePipe,
    RelatedAnimesComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CarouselModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
