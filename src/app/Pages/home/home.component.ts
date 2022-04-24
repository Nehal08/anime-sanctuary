import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search!: FormGroup;
  filter!: FormGroup;

  isCollapsed: boolean = true;
  filtering: boolean = false;

  query!: any;
  animeList!: any;
  orderBys = [ 
    {
      value: "title",
      name: 'Title'
    },
    {
      value: "start_date",
      name: 'Start Date'
    },
    {
      value: "end_date",
      name: 'End Date'
    },
    {  
      value: "episodes",
      name: 'Episodes'
    },
    { 
      value: "score",
      name: 'Score'
    },
    {
      value: "rank",
      name: 'Rank'
    },   
    {
      value: "popularity",
      name: 'Popularity'
    }
  ]


  constructor(private animeService: AnimeService,private router: Router) { }

  ngOnInit(): void {
    this.search = new FormGroup({
      searchQuery: new FormControl()
    });

    this.filter = new FormGroup({
      status: new FormControl(''),
      type: new FormControl(''),
      rating: new FormControl(''),
      order_by: new FormControl('') 
    });


  }

  handleSearch(form: FormGroup){

    this.query = form.value.searchQuery

    this.animeService.searchAnimeByName(form.value.searchQuery).subscribe(data => {
      let obj:any = data;
      this.animeList = obj.data;
    },error => {
      this.router.navigate(['**'])
    })  
  }

  handleFilter(form: FormGroup){

    this.filtering = true
    let filters = ''
    if(form.touched){
      filters = '&status=' + form.value.status + '&type=' + form.value.type + '&rating=' + form.value.rating + '&order_by=' + form.value.order_by
    }

    this.animeService.filterAnime(filters,this.query).subscribe(data => {
      let obj:any = data;
      this.animeList = obj.data;
    })
  }

  removeFilter(form: FormGroup){
    this.isCollapsed = true;
    this.filtering = false;
    form.value.status = ''
    form.value.type = ''
    form.value.rating = ''
    form.value.order_by = ''
  }

}
