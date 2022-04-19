import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AnimeProfileComponent } from './Pages/anime-profile/anime-profile.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { GenreTagComponent } from './components/genre-tag/genre-tag.component';
import { GenrePageComponent } from './Pages/genre-page/genre-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    NavBarComponent,
    AnimeProfileComponent,
    PageNotFoundComponent,
    GenreTagComponent,
    GenrePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
