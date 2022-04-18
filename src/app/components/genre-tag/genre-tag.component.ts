import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-tag',
  templateUrl: './genre-tag.component.html',
  styleUrls: ['./genre-tag.component.css']
})
export class GenreTagComponent implements OnInit {

  @Input() genre!: any;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigate(){
    this.router.navigate(['genre',this.genre.genreid,{ name : this.genre.name}])
  }

}
