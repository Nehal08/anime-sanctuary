import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() animes: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['anime',this.animes.mal_id])
  }

}
