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
  filters: string = '';
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
      searchQuery: new FormControl(), 
    });

    this.filter = new FormGroup({
      status: new FormControl(''),
      type: new FormControl(''),
      rating: new FormControl(''),
      order_by: new FormControl('') 
    });

    this.filter.valueChanges.subscribe(data => {
      this.filtering = true
      this.filters = '&status=' + data.status + '&type=' + data.type + '&rating=' + data.rating + '&order_by=' + data.order_by

      this.animeService.searchAnimeByName(this.filters,this.query).subscribe(data => {
        let obj:any = data;
        this.animeList = obj.data;
      })

    });
  }

  handleSearch(form: FormGroup){

    this.query = form.value.searchQuery

    this.animeService.searchAnimeByName(this.filters,this.query).subscribe(data => {
      let obj:any = data;
      this.animeList = obj.data;
    })
  }

  removeFilter(){
    this.isCollapsed = true;
    this.search.reset()
    this.filter.setValue({
      'status': '',
      'type': '',
      'rating': '',
      'order_by':''
    })
    

    this.filters = ''
    this.filtering = false;

    this.animeService.searchAnimeByName(this.filters,this.query).subscribe(data => {
      let obj:any = data;
      this.animeList = obj.data;
    })

  }

}
